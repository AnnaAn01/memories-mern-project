import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import "./Posts.css";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  // console.log(posts);
  return (
    <>
      {!posts.length ? (
        <div className="loader"></div>
      ) : (
        <div className="posts__grid-container">
          {posts.map((post, index) => (
            <div className="posts__grid" key={index}>
              <Post post={post} setCurrentId={setCurrentId} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
