import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { problems, reasons } from "../../constants/index";

const StatementCard = (props) => {
  const [data, setData] = useState({});
  const id = props.id + 1;

  useEffect(() => {
    let items = [];

    if (props.type == "problem") {
      items = problems;
    } else if (props.type == "reason") {
      items = reasons;
    }

    let item = items.filter(function (item) {
      return item.id == id;
    });

    if (item) {
      setData(item[0]);
    }
  }, []);

  if (data) {
    const linkUrl = "/problems/" + id;

    if (props.type == "problem") {
      return (
        <Link to={linkUrl}>
          <Content data={data} />
        </Link>
      );
    } else if (props.type == "reason") {
      return <Content data={data} />;
    }
  }
};

const Content = (props) => {
  const data = props.data;
  return (
    <div className="statement-card">
      <div className="statement-card-image">
        <img src={data.img}></img>
      </div>
      <div className="statement-card-header">{data.title}</div>
      <div className="statement-card-description">{data.description}</div>
    </div>
  );
};

export default StatementCard;
