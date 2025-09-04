import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUser(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleClick(e) {
    if (userName === "Meghana" && password === "123456") {
      navigate("/meghanadashboard");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <>
      <h3>UserName</h3>
      <input type="text" value={userName} onChange={handleUser} />
      <h3>Password</h3>
      <input type="text" value={password} onChange={handlePassword} />
      <div>
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
};

export default Login;
