import React from "react";

const PostSuccess = ({ isSuccessOpen, setIsSuccessOpen }) => {
  if (!isSuccessOpen) return null;
  return (
    <div className="add-category-container dim">
      <div className="add-category-wrapper vertical-center">
        <div className="add-category modal">
          <h3 className="modal-title">
            Thanks! Your review has been successfully posted.
          </h3>
          <button className="btn " onClick={() => setIsSuccessOpen(false)}>
            {" "}
            Okay{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostSuccess;
