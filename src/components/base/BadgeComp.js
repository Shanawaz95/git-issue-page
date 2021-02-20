import React from "react";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function BadgeComp(props) {
  const { labels } = props;

  return (
    <div>
      {labels.length != 0
        ? labels.map((val, id) => {
            const col = "#" + val.color;
            console.log(col);
            return (
              <Badge
                key={id}
                style={{ backgroundColor: { col }, borderRadius: "30px" }}
                className="custBadge"
                variant="primary"
              >
                {val.name}
              </Badge>
            );
          })
        : null}
    </div>
  );
}

export default BadgeComp;
