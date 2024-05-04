import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CategoryGames from "../CategoryGames/CategoryGames";
import { useEffect } from "react";

export default function BrowserGames() {
  let id = useParams();
  console.log(id);
  let [browserGames, setBrowserGames] = useState([]);
  async function getData() {
    try {
      let { data } = await axios.get(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=${id.id}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "ccacafe9e4msh6a9a7ff703659f3p15e169jsncca40f6efd1c",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );
      setBrowserGames(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="container main_margin">
      <div className="row g-4 mt-4">
        {browserGames.map((item) => {
          return <CategoryGames item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
