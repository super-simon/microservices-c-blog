import axios from "axios";
import React, { useState } from "react";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    console.log({ content });
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="new-comment-content" className="form-label">
            Comment
          </label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="new-comment-content"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
