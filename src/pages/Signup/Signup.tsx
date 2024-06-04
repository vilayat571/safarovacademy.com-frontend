import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signUpform } from "../../redux/reducers/signUpSlice";
import SEO from "../../SEO/SEO";

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

  const data: any = localStorage.getItem("signIn");
  const object = JSON.parse(data);

  const location = useLocation();

  useEffect(() => {
    object?.username && location.pathname == "/signup" && navigate("/");
    window.scrollTo(0, 0);
    document.onkeydown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key == "I") {
        e.preventDefault();
      }
    };
  });

  const dispatch = useAppDispatch();

  const handleChange: HandleChangeSignup = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const [text, setText] = useState("");

  function alertMsg(text: string) {
    setText(text);
    setTimeout(() => {
      setText("");
    }, 2000);
  }

  const StopRender = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      form.email.length > 7 &&
      form.password.length > 7 &&
      form.username.length > 4 &&
      form.email.includes("@") &&
      form.email.includes(".com")
    ) {
      dispatch(signUpform(form)).then((result: any) => {
        if (result.payload != 400) {
          setForm({
            email: "",
            username: "",
            password: "",
          });
          navigate("/signin");
        } else {
          alertMsg("There is a user with these credentials");
        }
      });
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
    <React.Fragment>
      <SEO
        title="Sign up"
        description="Sign up to safarovacademy to see updates on a time and to be able to ask a question from Vilayat Safarov"
        name="’Safarov Academy’"
        type="infographic"
      />
      <div className="grid w-full h-screen">
        <div
          className={`${
            text.length > 0
              ? " absolute bottom-12 right-8 text-white bg-red-700 px-2 py-1 text rounded z-40"
              : "absolute top-12 invisible"
          }`}
        >
          {text}
        </div>
        <div className=" text-center flex justify-center items-center text-black">
          <div className=" relative xl:top-12 lg:top-12 md:top-10 sm:top-10">
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
               rounded text-[#c3c3c3] px-6 text-normal p-4 my-3 xl:w-9/12 lg:w-9/12 sm:w-11/12 md:w-10/12 bg-[#232323]"
                value={form.username}
                onChange={(e) => handleChange(e)}
              />
              <input
                required={true}
                type="text"
                id="email"
                placeholder="E-mail"
                className="  h-13 tracking-wide outline-none rounded text-[#c3c3c3] px-6 text-normal p-4 my-3 xl:w-9/12 lg:w-9/12 sm:w-11/12 md:w-10/12 bg-[#232323]"
                value={form.email}
                onChange={(e) => handleChange(e)}
              />

              <input
                required={true}
                type="text"
                id="password"
                placeholder="Password"
                className="  h-13 tracking-wide outline-none rounded text-[#c3c3c3] px-6 text-normal p-4 my-3 xl:w-9/12 lg:w-9/12 sm:w-11/12 md:w-10/12 bg-[#232323]"
                value={form.password}
                onChange={(e) => handleChange(e)}
              />
              <br />
              <button className=" w-28 h-10 text-normal tracking-wide text-white mt-3 rounded-sm bg-[#232323]">
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
    </React.Fragment>
  );
}

export default Signup;
