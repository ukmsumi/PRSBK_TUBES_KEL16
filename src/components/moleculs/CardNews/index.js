import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;

const CardNews = ({ photo, title, desc }) => {
  return (
    <Card
      hoverable
      style={{ width: 300, marginBottom: 20 }}
      cover={<img alt="example" src={photo} />}
    >
      <Meta title={title} />
      <Meta description={desc} />
    </Card>
  );
};

export default CardNews;
