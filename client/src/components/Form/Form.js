import React, { useState, useEffect } from "react";
import "./Form.css";
import FileBase from "react-file-base64";

import { createPost, updatePost } from "../../actions/posts";
import { useDispatch, useSelector } from "react-redux";

// get the current id of the post we're on

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
    } else {
      dispatch(updatePost(currentId, postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <>
      <div className="form__paper">
        <h6 className="form__title">
          {currentId ? "Editing" : "Creating"} a Memory
        </h6>
        <form
          autoComplete="off"
          noValidate
          className="form__form"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <label htmlFor="creator" name="creator" className="input-label">
              Creator
            </label>
            <input
              className="form__input"
              type="text"
              name="creator"
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="title" name="title" className="input-label">
              Title
            </label>
            <input
              className="form__input"
              type="text"
              name="title"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="message" name="message" className="input-label">
              Message
            </label>
            <input
              className="form__input form__input-message"
              type="text"
              name="message"
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="tags" name="tags" className="input-label">
              Tags
            </label>
            <input
              className="form__input"
              type="text"
              name="tags"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value.split(",") })
              }
            />
          </div>
          <div className="form__fileInput">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <button type="submit" className="form__buttonSubmit btn1">
            Submit
          </button>
          <button onClick={clear} className="form__buttonSubmit btn2">
            Clear
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
