import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);

    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err)
  return (
    <div className="Register">
      <div className="card">
        <div className="left">
          <h1>Laca Social.</h1>
          <p>Spark Connections, Ignite Conversations</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" onChange={handleChange}
 />
            <input type="email" placeholder="Email" onChange={handleChange}
 />
            <input type="password" placeholder="Password" onChange={handleChange}
/>
            <input type="text" placeholder="Name"onChange={handleChange}
/>
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
