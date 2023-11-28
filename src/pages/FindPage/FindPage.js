import { useEffect, useState } from "react";
import axios from "axios";
import "./FindPage.scss";

function FindPage() {
  const [posts, setPosts] = useState(null);
  const [loadingState, setLoadingState] = useState("loading");
  const [currentUserId, setCurrentUserId] = useState(localStorage.getItem("userId"));

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const allPosts = await axios.get("http://localhost:3001/posts");
        if (allPosts.status === 200) {
          setPosts(allPosts.data);
          setLoadingState("done");
        }
      } catch (error) {
        alert("Error when getting posts");
      }
    };
    getAllPosts();
  }, []);

  async function deletePost(postId) {

    let response;
    try {
      response = await axios.delete(`http://localhost:3001/posts/${postId}`);
      if (response.status === 204) {
        alert("Post has been deleted!");
        window.location.href= "/find";
      }else {
        alert("Error when deleting post");
      }
    } catch (error) {
      alert("Error when deleting post");
    }
  }

  return (
    <div className="find">
      <div className="find__container">
        <h1 className="find__container-title">FIND SHARED PRODUCTS</h1>
      </div>
      {loadingState === "loading" && <h2>Posts are loading...</h2>}
      {loadingState === "done" &&
        posts.map((post) => {
          return (
            <div className="find__details" key={post.id}>
              <p className="find__username"><span>User Name : </span>{post.user_name}</p>
              <p className="find__item"><span>Shared Product : </span>{post.name}</p>
              <input type="hidden" value={post.id}/>
              <p className="find__description"><span>Product Description : </span>{post.description}</p>
              <p className="find__address"><span>Pick Up Location : </span>{post.location}</p>
              <input type="hidden" value={post.user_id}/>
              {currentUserId == post.user_id && (<button className="find__delete-button" onClick={() => deletePost(post.id)}>Delete</button>)}
            </div>
          );
        })}
    </div>
  );
}

export default FindPage;
