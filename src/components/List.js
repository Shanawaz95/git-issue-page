import React, { useContext } from "react";
import { dataContext } from "../App";
import RowComponent from "./RowComponent/RowComponent";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function List() {
  const data = useContext(dataContext);

  return (
    <div className="container">
      <ListGroup>
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
