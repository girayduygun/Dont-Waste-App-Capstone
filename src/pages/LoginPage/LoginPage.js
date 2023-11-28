import { useState } from "react";
import axios from "axios";
import "./LoginPage.scss";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();
    let response;
    try {
      response = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });

      if (response.data.status === 200) {
        alert("User has logged");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", email);
        localStorage.setItem("userName", response.data.username);
        localStorage.setItem("userId", response.data.userid);
        window.location.href = "/";
      } else {
        alert("Username or password is wrong");
      }
    } catch (error) {
      alert("Username or password is wrong");
    }
  }

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Please Login</h1>
        <form onSubmit={login}>
          <div className="login__form">
            <p className="login__form-title">Please enter your e-mail</p>
            <input className="login__form-text" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@mail.com" />
            <hr/>
            <p className="login__form-title">Please enter your password</p>
            <input className="login__form-text" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
            <hr/>
            <button type="submit" className="login__form-button">Login</button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
