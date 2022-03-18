import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    try {
      e.preventDefault();
      login({ email, password }, dispatch);
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://stocks.mn/wp-content/uploads/2021/04/cropped-logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Нэвтрэх</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={ handleLogin || alert("dsdasdsadsa")}>
            нэвтрэх
          </button>
          <span>
            New to Stocks? <Link to="../register" className="link"><b>Бүртгүүлэх.</b> </Link> 
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}