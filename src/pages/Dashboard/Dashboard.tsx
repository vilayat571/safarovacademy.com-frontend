import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function SignOut() {
    localStorage.removeItem("signIn");

    navigate("/");
  }

  return (
    <div>
      <button onClick={() => SignOut()}>Log out</button>
    </div>
  );
}

export default Dashboard;
