import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function GameDetails() {
  let id = useParams();
  let [details, setDetails] = useState([]);
  async function getData() {
    try {
      let { data } = await axios.get(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id.id}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "ccacafe9e4msh6a9a7ff703659f3p15e169jsncca40f6efd1c",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );
      setDetails(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="main_margin">
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-6 col-lg-4">
            <img src={details?.thumbnail} alt="" className="w-100" />
            <div className="d-flex justify-content-between mt-3">
              <div>
                <p className="free_details text-uppercase btn">Free</p>
              </div>
              <div className="w-75">
                <button className="btn p-2 text-white text-uppercase playnow_btn w-100 ">
                  <Link
                    to={`${details?.game_url}`}
                    className="text-decoration-none text-white"
                    target="_blank"
                  >
                    Play Now <i className="fa-solid fa-right-from-bracket"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-8">
            <h2>{details?.title}</h2>
            <div className="mt-4">
              <h3>Description</h3>
              <p>{details?.description}</p>
            </div>
            <div>
              <h3>Images:</h3>
              <ImageGallery />
            </div>
            <div>
              <h3>Requirments:</h3>
              <ul className="list-unstyled ms-2">
                <li>
                  <span className="fw-bold me-2">OS:</span>
                  <p className="d-inline">
                    {details?.minimum_system_requirements?.os}
                  </p>
                </li>
                <li>
                  <span className="fw-bold me-2">Processor: </span>
                  <p className="d-inline">
                    {details?.minimum_system_requirements?.processor}
                  </p>
                </li>
                <li>
                  <span className="fw-bold me-2">Memory:</span>
                  <p className="d-inline">
                    {details?.minimum_system_requirements?.memory}
                  </p>
                </li>
                <li>
                  <span className="fw-bold me-2">Storage:</span>
                  <p className="d-inline">
                    {details?.minimum_system_requirements?.storage}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
