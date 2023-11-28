import "./Links.scss";
import { Link } from "react-router-dom";

function Links() {
  console.log("email", localStorage.getItem("email"));
  function checkAndGoShare() {
    const email = localStorage.getItem("email");
    if (email) {
      window.location.href = "/share";
    } else {
      alert("Please login to share your post.");
    }
  }
  return (
    <>
      <div className="links">
        <div className="links__container">
        <button onClick={checkAndGoShare} className="links__share-button">
            <div className="links__button">S h a r e</div>
            </button>
        </div>
        <div className="links__container">
          <Link to="/find" className="links__find">
            <div className="links__button">F i n d</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Links;
