import React, { useContext } from "react";
import { dataContext } from "../App";
import RowComponent from "./RowComponent/RowComponent";
import { ListGroup } from "react-bootstrap";
import { ReactComponent as IssueIcon } from "../exclamation-circle-solid.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function List() {
  const data = useContext(dataContext);

  return (
    <div className="container">
      <ListGroup style={{ marginTop: "20px" }}>
        <ListGroup.Item
          className="d-flex flex-start justify-content-between"
          style={{ backgroundColor: "#f8f8ff" }}
        >
          <div className="d-flex flex-start">
            <IssueIcon style={{ color: "black" }} className="issue"></IssueIcon>
            <p style={{ marginTop: "8px" }}>1,116 Open</p>
          </div>
          <h3>GitHub ISSUE</h3>
          <div></div>
        </ListGroup.Item>
        {data.map((obj, id) => {
          return (
            <ListGroup.Item key={id} action>
              <RowComponent obj={obj} id={id}></RowComponent>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default List;
