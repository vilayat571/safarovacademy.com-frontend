import { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { submitSigninForm } from "../../redux/reducers/signinSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export interface Form {
  email: string;
  password: string;
}

interface StopRender {
  (e: React.FormEvent<HTMLFormElement>): void;
}

interface HandleChangeFunc {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

function Signin() {
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const handleChange: HandleChangeFunc = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const [text, setText] = useState(true);

  const loadingPart = (
    <div className="bg-[#000] w-full h-screen flex justify-center items-center">
      {text ? (
        <img
          src="https://cdn-images-1.medium.com/max/800/0*3IFEy-hfoIpgFjBl.gif"
          className="w-[200px] h-[200px] object-contain"
          alt=""
        />
      ) : (
        "Success!"
      )}
    </div>
  );

  const realPart = (
    <div className="grid  w-full h-screen">
      <div className=" text-center flex justify-center  items-center text-black">
        <div className=" relative top-14">
          <p className="">
            <span className="text-[26px] font-semibold text-white">
              You're welcome!
            </span>
          </p>
          <form className="mt-4  " onSubmit={(e) => stopRender(e)}>
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
              Sign in
            </button>
          </form>
          <div className="text-base text-center mt-6">
            <span className="text-[#c3c3c3]">
              Did you not have any account ?.
            </span>

            <p className="mt-[6px]">
              <Link to="/signup" className="text-base text-white font-medium">
                Create an account
              </Link>
              <FontAwesomeIcon
                className="-rotate-45 ml-2 text-base"
                icon={faArrowRight}
              />
            </p>
          </div>
        </div>
      </div>

    </div>
  );

  const stopRender: StopRender = (e) => {
    e.preventDefault();
    dispatch(submitSigninForm(form));
    setLoading(true);

    setTimeout(() => {
      setText(false);
    }, 2000);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return <>{loading ? loadingPart : realPart}</>;
}

export default Signin;
