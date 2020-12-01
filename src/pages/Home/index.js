import Axios from "axios";
import React, { useEffect, useState } from "react";
import { CardNews } from "../../components/moleculs";
import "./home.scss";

const Home = () => {

  const [data, setData] = useState({ cards: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        'https://api.magicthegathering.io/v1/cards',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);

  return (
    <div className="home-wrapper">
      <h1>Kartu Magic</h1>
      <div className="content-wrapper">
        {data.cards.map((item) => {
          return (
            <CardNews
              key={item.id}
              title={item.name}
              desc={item.text}
              photo={item.imageUrl}
              link={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
