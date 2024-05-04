import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryGames from "../CategoryGames/CategoryGames";

export default function Freegames() {
  let [home, setHome] = useState([]);
  async function getData() {
    try {
      let { data } = await axios.get(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        {
          headers: {
            "X-RapidAPI-Key":
              "ccacafe9e4msh6a9a7ff703659f3p15e169jsncca40f6efd1c",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );
      setHome(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container main_margin">
      <div className="row g-4 mt-4">
        {home.map((item) => {
          return <CategoryGames item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
