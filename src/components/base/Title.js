import React from "react";

function Title(props) {
  const { title, date, number, user } = props;
  const createdDate = new Date(date);
  const currentDate = new Date();

  const ago = Math.floor((currentDate - createdDate) / (1000 * 60 * 60 * 24));

  return (
    <div>
      <h5 className="title">{title}</h5>
      <p className="title-meta">
        #{number} opened {ago} days ago by {user}
      </p>
    </div>
  );
}

export default Title;
