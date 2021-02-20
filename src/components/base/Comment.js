import React from "react";
import { ReactComponent as CommentIcon } from "../../comment-alt-regular.svg";

function Comment(props) {
  const comment = props.comments;

  return (
    <div className="comment">
      {comment != 0 ? (
        <>
          <CommentIcon
            style={{ height: "15px", width: "15px", margin: "3px" }}
          ></CommentIcon>
          <span style={{ fontSize: "small", marginLeft: "auto" }}>
            {comment}
          </span>
        </>
      ) : null}
    </div>
  );
}

export default Comment;
