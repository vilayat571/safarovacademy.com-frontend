import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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

  ///const navigate = useNavigate();

  const error = useAppSelector((state) => state.signUpSlice.error);

  const StopRender = (e: React.FormEvent<HTMLFormElement>) => {
    if (
      form.email.length > 0 &&
      form.username.length > 0 &&
      form.password.length > 0
    ) {
      dispatch(signUpform(form));
      // navigate("/signin");
      if (error.email || error.password || error.username || error.email && error.password ) {
        alert(error.email[0] || error.username[0]);
      }
    }
    e.preventDefault();
  };

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-4  md:grid-cols-4 sm:grid-cols-2 w-full h-screen">
      <div className=" text-center flex justify-center items-center col-span-2 text-black">
        <div className=" relative top-[52px]">
          <p className="">
            <span className="text-[26px] font-semibold text-white">
              Create an account{" "}
            </span>
          </p>
          <form className="mt-4" onSubmit={(e) => StopRender(e)}>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className=" h-13 outline-none rounded text-[#c3c3c3] px-6 text-base p-4 my-2 w-11/12 bg-[#232323]"
              value={form.username}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              id="email"
              placeholder="E-mail"
              className=" h-13 outline-none rounded text-[#c3c3c3] px-6 text-base p-4 my-2 w-11/12 bg-[#232323]"
              value={form.email}
              onChange={(e) => handleChange(e)}
            />

            <input
              type="text"
              id="password"
              placeholder="Password"
              className=" h-13 outline-none rounded text-[#c3c3c3] px-6 text-base p-4 my-2 w-11/12 bg-[#232323]"
              value={form.password}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <button className=" w-32 h-12 text-base text-white mt-4 round bg-[#232323]">
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
      <div className=" tracking-wide flex justify-center items-center col-span-2 text-center bg-[#232323]">
        <div className="relative top-8">
          <p className="">
            <span className="text-3xl font-semibold text-white">safarov.</span>
          </p>
          <div className="w-full flex justify-center items-center">
            <p className="mt-3 text-[17px] font-medium text-[#c3c3c3] w-3/5">
              Constantly developing skills in programming is one of the most
              important issues. If you want to develop yourself through my blogs
              then join me. Let's do it!.
            </p>
          </div>
          <p className="mt-5">
            <FontAwesomeIcon
              className="-rotate-45 mr-2 text-base"
              icon={faArrowRight}
            />

            <Link to="/" className="text-[17px] text-white font-medium">
              Go back
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
