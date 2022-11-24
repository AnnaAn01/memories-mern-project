import React from "react";
import "./Post.css";
import moment from "moment";
import {
  FiThumbsUp,
  FiTrash,
  FiTrash2,
  FiMoreHorizontal,
} from "react-icons/fi";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div className="post__card">
      <div className="post__image-wrapper">
        <img src={post.selectedFile} alt="" className="post__media" />
      </div>
      <div className="post__overlay">
        <h6 className="post__creator">{post.creator}</h6>
        <div className="post__date-time-posted">
          {moment(post.createdAt).fromNow()}
        </div>
      </div>
      <div className="post__overlay2">
        <button className="post__button" onClick={() => setCurrentId(post._id)}>
          <FiMoreHorizontal />
        </button>
      </div>
      <div className="post__details">
        <div className="post__hashtag">
          {post.tags.map((tag) => `#${tag} `)}
        </div>
        <div className="post__title">{post.title}</div>
        <div className="post__cardcontent">
          <h5 className="post__message">{post.message}</h5>
        </div>
        <div className="post__cardactions">
          <button
            className="post__button-thumb-delete"
            onClick={() => dispatch(likePost(post._id))}
          >
            <FiThumbsUp className="thumbup" />
            Like &nbsp;
            {post.likeCount}
          </button>
          <button
            className="post__button-thumb-delete"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <FiTrash2 className="delete" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
