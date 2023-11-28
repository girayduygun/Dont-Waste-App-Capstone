import { useState } from "react";
import axios from "axios";
import "./SignupPage.scss";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users", {
        email,
        user_name: userName,
        password,
      });
      if (response.status === 201) {
        alert("User has signed up");
      } else {
        alert("Error when signing up!!");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="signup">
      <div className="signup__container">
        <h1 className="signup__title">Sign Up</h1>
        <form onSubmit={register}>
          <div className="signup__form">
            <p className="signup__form-title">Please enter your e-mail</p>
            <input className="signup__form-text" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@mail.com" />
            <hr/>
            <p className="signup__form-title">Please enter your name and surname</p>
            <input className="signup__form-text" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="example: George Adlam" />
            <hr/>
            <p className="signup__form-title">Please enter your password</p>
            <input className="signup__form-text" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
            <hr/>
            <button type="submit" className="signup__form-button">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
