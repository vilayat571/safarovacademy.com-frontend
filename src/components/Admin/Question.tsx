import { useEffect, useState } from "react";
import Adminlayout from "../../elements/Admin/Adminlayout";
import Loading from "../../atoms/Question/Loading";
import Isdata from "../../atoms/Question/Isdata";

function Question() {
  const data: any = localStorage.getItem("signIn");
  const object = JSON.parse(data);

  const [questions, setQuestions] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.safarovacademy.com/api/v1/blog/questions/?owner=${object.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  console.log("g");

  return (
    <Adminlayout>
      {loading ? <Loading /> : <Isdata questions={questions} />}
    </Adminlayout>
  );
}

export default Question;
