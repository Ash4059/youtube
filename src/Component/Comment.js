import React from "react";
import Proptypes from "prop-types";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
        <Comment key={index} data={comment} />
        <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies} />
        </div>
    </div>
  ));
};

const Comment = (props) => {
  const { name, text, replies } = props.data;

  return (
    <div className="flex py-2 my-2 bg-gray-100 shadow-md rounded-md">
      <span className="self-center cursor-pointer mx-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 448 512"
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
      </span>
      <div className="ml-4">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

CommentsList.propTypes = {
  props: Proptypes.array.isRequired,
};

export default CommentsList;
