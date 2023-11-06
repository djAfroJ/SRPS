import React from "react";
import { Link } from "react-router-dom";
import "../projectContainer/HomeContainer//Home.css";

const Links = ({ url, name, style }) => {
  return (
    <Link to={url}>
      <button className={style}>
        <h4>{name}</h4>
      </button>
    </Link>
  );
};

export default Links;
