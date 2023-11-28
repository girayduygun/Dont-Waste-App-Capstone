import "./SharePage.scss";
import { useState } from "react";
import axios from "axios";

function SharePage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const email = localStorage.getItem("email");

  async function createPost(e) {
    e.preventDefault();
    try {
      if (title === "" || desc === "" || location === "") {
        alert("Please fill all fields of the form");
        return;
      }
      const response = await axios.post(
        "http://localhost:3001/posts",
        {
          name: title,
          description: desc,
          location,
        },
        {
          headers: {
            email: email,
          },
        }
      );
      if (response.status === 201) {
        alert("Post has shared");
      } else {
        alert("Error when posting!!");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="share">
      <div className="share__container">
        <h1 className="share__title">Please fill the form to share your product</h1>
        <form onSubmit={createPost}>
          <div className="share__form">
            <p className="share__form-title">Please enter the product name</p>
            <input className="share__form-text" type="textarea" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Product name (for example, 1 lb apple, 2 lb potato)" />
            <hr/>
            <p className="share__form-title">Please enter the product description</p>
            <input className="share__form-text" type="textarea" onChange={(e) => setDesc(e.target.value)} value={desc} placeholder="Product description (for example, Bought 2 days ago, Expire date Dec 01)" />
            <hr/>
            <p className="share__form-title">Please enter your address</p>
            <input className="share__form-text" type="textarea" onChange={(e) => setLocation(e.target.value)} value={location} placeholder="Address (for example, 482 Front St W 2nd floor, Toronto, ON M5V 0W1)" />
            <hr/>
            <button type="submit" className="share__form-button">Share</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SharePage;
