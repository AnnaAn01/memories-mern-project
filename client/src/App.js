import React, { useState, useEffect } from "react";
import memories from "./images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import "./App.css";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="container">
      <nav className="navbar__container">
        <h2 className="app__title">Memories</h2>
        <img src={memories} alt="memories" className="app__image" />
      </nav>
      <div className="form-posts__container">
        <div className="container__grid-posts">
          <Posts setCurrentId={setCurrentId} />
        </div>
        <div className="container__grid-form">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
};

export default App;
