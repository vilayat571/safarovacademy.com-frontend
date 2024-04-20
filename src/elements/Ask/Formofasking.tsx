import { useState } from "react";

export interface AskInterface {
  title: string;
  description: string;
}

function Formofasking() {
  const [form, setForm] = useState<AskInterface>({
    title: "",
    description: "",
  });

  function changeForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  return (
    <div className="w-full grid grid-cols-1 gap-y-4 h-auto xl:mt-28 lg:mt-28 md:mt-28 sm:mt-16">
<form action="sendForm">

          {/* Input 1 - we will make a component */}
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
            value={form.description}
            onChange={(e) => changeForm(e)}
            id="description"
            type="text"
            className="bg-[#171719] w-4/5 h-24 indent-3 outline-none border-0 rounded-md 
            px-4 py-3"
          />
        </div>
      </div>

<button className="bg-[#171719] text-white px-6 py-4 rounded  mt-12">Ask a question</button>
</form>

    </div>
  );
}

export default Formofasking;
