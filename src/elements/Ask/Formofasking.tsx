import { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { sendFormData } from "../../redux/reducers/askQuestion";
import { useNavigate } from "react-router-dom";
import InputDiv from "../../atoms/Askqustion/InputDiv";
import Btn from "../../atoms/Askqustion/Btn";

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
        <InputDiv
          divStyle="col-span-1"
          title="Title"
          text1="Choose a topic related to the question. Try to be"
          text2="spesific and correct"
          value={form.title}
          changeForm={changeForm}
          id="title"
        />

        <InputDiv
          divStyle="col-span-1 mt-12"
          title="Description"
          text1=" Write a clear statement that covers the question and"
          text2="use as many characters as possible."
          value={form.subject}
          changeForm={changeForm}
          id="subject"
        />
        <Btn
          text={"Ask a question "}
          sendData={sendData}
          style="bg-[#171719] text-white px-6 py-4 rounded  mt-12"
        />
      </form>
    </div>
  );
}

export default Formofasking;
