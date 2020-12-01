import React from "react";
import { Dropdown, Gap } from "../../atoms";
import "./card.scss";

const Card = ({ nama, nim, photo, alt }) => {
  return (
    <div className="container">
      <div className="content">
        <div className="wrapper">
          <div className="photoWrapper">
            <img src={photo} alt={alt} className="avatar"></img>
          </div>
          <p className="name">{nama}</p>
          <p className="nim">{nim}</p>
          <Gap height={10} />
          <h1>Nilai</h1>
          <Dropdown>
            <option value="">A</option>
            <option value="1">A</option>
            <option value="2">A</option>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Card;
