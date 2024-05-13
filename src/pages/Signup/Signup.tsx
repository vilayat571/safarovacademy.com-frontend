import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Link } from "react-router-dom";
import { signUpform } from "../../redux/reducers/signUpSlice";

export interface FormSignup {
  email: string;
  username: string;
  password: string;
}

interface HandleChangeSignup {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

function Signup() {
  const [form, setForm] = useState<FormSignup>({
    email: "",
    username: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const handleChange: HandleChangeSignup = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  //const navigate = useNavigate();

  const [text, setText] = useState("");

  function alertMsg(text: string) {
    setText(text);
    setTimeout(() => {
      setText("");
    }, 2000);
  }

   let err = useAppSelector((state) => state.signUpSlice.error);

  const StopRender = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      form.email.length > 7 &&
      form.password.length > 7 &&
      form.username.length > 4 &&
      form.email.includes("@") &&
      form.email.includes(".com")
    ) {
      dispatch(signUpform(form));
     console.log('Err',err)

    } else if (form.email.length <= 7) {
      alertMsg("Email have to minimum 8 symbols");
    } else if (form.password.length <= 7) {
      alertMsg("password have to minimum 8 symbols");
    } else if (form.username.length <= 4) {
      alertMsg("username have to minimum 5 symbols");
    } else if (!form.email.includes("@") || !form.email.includes(".com")) {
      alertMsg("email have to contain @ and .com symbols");
    }
  };

  return (
    <div className="grid w-full h-screen">
      <div className=" absolute top-12 left-12 text-white text-xl font-semibold">
        {text}
      </div>
      <div className=" text-center flex justify-center items-center text-black">
        <div className=" relative top-12">
          <p className="">
            <span className="text-[27px] font-semibold text-white">
              Create an account{" "}
            </span>
          </p>
          <form
            autoComplete="off"
            className="mt-4"
            onSubmit={(e) => StopRender(e)}
          >
            <input
              required={true}
              type="text"
              id="username"
              placeholder="Username"
              className=" h-13 tracking-wide outline-none
               rounded-md text-[#c3c3c3] px-6 text-normal p-4 my-3 w-9/12 bg-[#232323]"
              value={form.username}
              onChange={(e) => handleChange(e)}
            />
            <input
              required={true}
              type="text"
              id="email"
              placeholder="E-mail"
              className="  h-13 tracking-wide outline-none rounded-md text-[#c3c3c3] px-6 text-normal p-4 my-3 w-9/12 bg-[#232323]"
              value={form.email}
              onChange={(e) => handleChange(e)}
            />

            <input
              required={true}
              type="text"
              id="password"
              placeholder="Password"
              className="  h-13 tracking-wide outline-none rounded-md text-[#c3c3c3] px-6 text-normal p-4 my-3 w-9/12 bg-[#232323]"
              value={form.password}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <button className=" w-28 h-10 text-normal tracking-wide text-white mt-3 rounded-md bg-[#232323]">
              Sign up
            </button>
          </form>
          <div className="text-base text-center mt-4">
            <span className="text-[#c3c3c3]">
              Do you have account already ?
            </span>

            <p className="mt-[6px] ">
              <Link className="underline mx-1" to="/signin">
                Sign in
              </Link>
              <Link className="underline mx-1" to="/">
                Cancel
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
