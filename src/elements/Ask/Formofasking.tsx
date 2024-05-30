import { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { sendFormData } from "../../redux/reducers/askQuestion";
import { useNavigate } from "react-router-dom";

export interface AskInterface {
  title: string;
  subject: string;
}

function Formofasking() {
  const [form, setForm] = useState<AskInterface>({
    title: "",
    subject: "",
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  function changeForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  const [msg, setMsg] = useState<string>("");

  if (msg.length > 0) {
    setTimeout(() => {
      setMsg("");
    }, 2000);
  }

  function sendData(e: any) {
    e.preventDefault();
    if (form.title.length > 19 && form.subject.length > 49) {
      dispatch(sendFormData({ title: form.title, subject: form.subject }));

      setTimeout(() => {
        setMsg("Success!");
        setForm({
          title: "",
          subject: "",
        });
      }, 1000);

      setTimeout(() => {
        navigate("/askquestion/myquestions");
      }, 2000);
    } else if (form.title.length < 19) {
      setMsg("Title of question must consist minimum 20 characters");
    } else if (form.subject.length < 49) {
      setMsg("Description of question must consist minimum 50 characters");
    }
  }

  return (
    <div className="w-full grid grid-cols-1 gap-y-4 h-auto xl:mt-28 lg:mt-28 md:mt-28 sm:mt-16">
      {msg.length > 0 && (
        <span
          className={` fixed bottom-12 z-20 right-10 ${
            msg == "Success!" ? "bg-green-700" : "bg-red-700"
          }  px-2 py-1 rounded text text-white`}
        >
          {msg}
        </span>
      )}
      <form action="sendForm">

        <div className="col-span-1">
          <div>
            <p className="text-[22px]  mb-4 tracking-wider"> Title</p>
            <p className="text-[#c3c3c3] text-[17px] font-thin tracking-wide mb-6">
              Choose a topic related to the question. Try to be
              <br />
              specific and correct.
            </p>
          </div>
          <div>
            <input
              required={true}
              value={form.title}
              onChange={(e) => changeForm(e)}
              id="title"
              type="text"
              className="bg-[#171719] w-4/5 h-24 indent-3 outline-none border-0 rounded-md 
            px-4 py-3"
            />
          </div>
        </div>

        {/* Input 2 - we will make a component */}
        <div className="col-span-1 mt-12">
          <div>
            <p className="text-[22px]  mb-4 tracking-wider"> Description</p>
            <p className="text-[#c3c3c3] text-[17px] font-thin tracking-wide mb-6">
              Write a clear statement that covers the question and
              <br />
              use as many characters as possible.
            </p>
          </div>
          <div>
            <input
              required={true}
              value={form.subject}
              onChange={(e) => changeForm(e)}
              id="subject"
              type="text"
              className="bg-[#171719] w-4/5 h-24 indent-3 outline-none border-0 rounded-md 
            px-4 py-3"
            />
          </div>
        </div>

        <button
          onClick={(e) => sendData(e)}
          className="bg-[#171719] text-white px-6 py-4 rounded  mt-12"
        >
          Ask a question
        </button>
      </form>
    </div>
  );
}

export default Formofasking;
