import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryGames from "../CategoryGames/CategoryGames";
export default function SpecificCategory() {
  let category = useParams();

  let [gameData, setGameData] = useState([]);
  async function getData() {
    try {
      let { data } = await axios.get(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category.id}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "ccacafe9e4msh6a9a7ff703659f3p15e169jsncca40f6efd1c",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );
      setGameData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [category]);

  return (
    <div className="container main_margin">
      <h2>
        Top Free <span className="text-uppercase"> {category.id} </span> Games
        for PC and Browser In 2024!
      </h2>
      <p>
        <span className="fw-bold"> {gameData.length} </span> free-to-play{" "}
        <span className="fw-bold"> {category.id} </span> games found in our
        games list!
      </p>
      <div className="row g-4 mt-4">
        {gameData.map((item) => {
          return <CategoryGames item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
