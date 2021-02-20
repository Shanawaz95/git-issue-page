import React from "react";
import { ReactComponent as IssueIcon } from "../../exclamation-circle-solid.svg";
import Title from "../base/Title";
import BadgeComp from "../base/BadgeComp";
import Comment from "../base/Comment";

function RowComponent(props) {
  const { title, number, labels, comments, created_at, user } = props.obj;

  return (
    <div className="rows">
      <IssueIcon className="issue"></IssueIcon>
      <Title
        title={title}
        date={created_at}
        number={number}
        user={user.login}
      ></Title>
      <BadgeComp labels={labels}></BadgeComp>
      <Comment comments={comments}></Comment>
    </div>
  );
}

export default RowComponent;
