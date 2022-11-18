import React, { useState, useEffect } from "react";
import memories from "./images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import "./App.css";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <nav className="navbar__container">
        <h2 className="app__title">Memories</h2>
        <img src={memories} alt="memories" className="app__image" />
      </nav>
      <div className="form-posts__container">
        <div className="container__grid-posts">
          <Posts />
        </div>
        <div className="container__grid-form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
