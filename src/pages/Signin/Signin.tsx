import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { submitSigninForm } from "../../redux/reducers/signinSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SEO from "../../SEO/SEO";

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

  const [text, setText] = useState(true);

  const [msg, setMsg] = useState<string>("");

  if (msg.length > 0) {
    setTimeout(() => {
      setMsg("");
    }, 2000);
  }
  const data: any = localStorage.getItem("signIn");
  const object = JSON.parse(data);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    object?.username && location.pathname == "/signin" && navigate("/");
    window.scrollTo(0, 0);
    document.onkeydown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key == "I") {
        e.preventDefault();
      }
    };
  });

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
      {msg.length > 0 && (
        <span className="absolute bottom-12 z-20 right-10 bg-red-700 px-2 py-1 rounded text text-white">
          {msg}
        </span>
      )}
      <div className=" text-center flex justify-center  items-center text-black">
        <div className=" relative xl:top-14 lg:top-14 md:top-12 sm:top-10">
          <p >
            <span className="text-[26px] font-semibold text-white">
              You're welcome!
            </span>
          </p>
          <form
            autoComplete="off"
            className="mt-4  "
            onSubmit={(e) => stopRender(e)}
          >
            <input
              required={true}
              type="text"
              id="email"
              placeholder="E-mail"
              className=" h-13 outline-none rounded text-[#c3c3c3] px-6 text-base p-4 my-2 w-11/12 bg-[#232323]"
              value={form.email}
              onChange={(e) => handleChange(e)}
            />

            <input
              required={true}
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
            <p>
              <span className="text-[#c3c3c3]">
                Did you not have any account ?.
              </span>
            </p>

            <p className="mt-[6px] bordr grid  ">
              <Link to="/signup" className="text-base text-white font-medium">
                Create an account
              </Link>

              <Link to="/">
                <u> Cancel</u>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const stopRender: StopRender = (e) => {
    e.preventDefault();

    if (
      form.email.length > 7 &&
      form.password.length > 7 &&
      form.email.includes("@") &&
      form.email.includes(".com")
    ) {
      dispatch(submitSigninForm(form)).then((res) => {
        if (res.meta.requestStatus == "rejected") {
          setMsg("Pasword or email are incorrect");
        } else {
          setForm({
            email: "",
            password: "",
          });
          setTimeout(() => {
            setLoading(true);
          }, 500);
          setTimeout(() => {
            setText(false);
          }, 1500);

          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      });
    } else if (form.email.length <= 7) {
      setMsg("Email have to minimum 8 symbols");
    } else if (form.password.length <= 7) {
      setMsg("password have to minimum 8 symbols");
    } else if (!form.email.includes("@") || !form.email.includes(".com")) {
      setMsg("email have to contain @ and .com symbols");
    }
  };

  return (
    <>
      <SEO
        title="Sign in "
        description="Sign in to safarovacademy to see updates on a time and to be able to ask a question from Vilayat Safarov"
        name="’Safarov Academy’"
        type="infographic"
      />
      {loading ? loadingPart : realPart}
    </>
  );
}

export default Signin;
