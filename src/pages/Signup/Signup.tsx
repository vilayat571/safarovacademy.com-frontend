import { useState } from "react";
import { useAppDispatch } from "../../redux/store";

import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const StopRender = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signUpform(form));
    navigate("/signin");
    // if (form.password.length < 8 ) {
    //   alert("Password must contain mnimum 8 symbols");
    // } else {
    //   dispatch(signUpform(form));
    //   if (error.email || error.username || error.password) {
    //     alert(
    //       error.email
    //         ? error.email[0]
    //         : error.password
    //         ? error.password[0]
    //         : error.username
    //         ? error.username[0]
    //         : ""
    //     );
    //   }
    // }
  };

  return (
    <div className="grid w-full h-screen">
      <div className=" text-center flex justify-center items-center text-black">
        <div className=" relative top-16">
          <p className="">
            <span className="text-[27px] font-semibold text-white">
              Create an account{" "}
            </span>
          </p>
          <form className="mt-4" onSubmit={(e) => StopRender(e)}>
            <input
              required={true}
              type="text"
              id="username"
              placeholder="Username"
              className=" h-13 tracking-wide outline-none
               rounded-sm text-[#c3c3c3] px-6 text-normal p-4 my-3 w-9/12 bg-[#232323]"
              value={form.username}
              onChange={(e) => handleChange(e)}
            />
            <input
              required={true}
              type="text"
              id="email"
              placeholder="E-mail"
              className="  h-13 tracking-wide outline-none rounded-sm text-[#c3c3c3] px-6 text-normal p-4 my-3 w-9/12 bg-[#232323]"
              value={form.email}
              onChange={(e) => handleChange(e)}
            />

            <input
              required={true}
              type="text"
              id="password"
              placeholder="Password"
              className="  h-13 tracking-wide outline-none rounded-sm text-[#c3c3c3] px-6 text-normal p-4 my-3 w-9/12 bg-[#232323]"
              value={form.password}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <button className=" w-28 h-10 text-normal tracking-wide text-white mt-3 rounded-sm bg-[#232323]">
              Sign up
            </button>
          </form>
          <div className="text-base text-center mt-6">
            <span className="text-[#c3c3c3]">
              Do you have account already ?
            </span>

            <p className="mt-[6px]">
              <Link className="underline" to="/signin">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Signup;
