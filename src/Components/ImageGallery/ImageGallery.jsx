import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ImageGallery() {
  let id = useParams();
  let [details, setDetails] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };
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
    <>
      {selectedImage && (
        <div
          className={`imgLayer position-fixed d-flex justify-content-center align-content-center flex-wrap`}
          onClick={closeImage}
        >
          <div className="model">
            <img
              src={selectedImage}
              width={"600px"}
              alt="Selected"
              className="rounded-3"
            />
          </div>
        </div>
      )}
      <div className="row g-2">
        {details?.screenshots?.map((item) => {
          return (
            <div className="col-md-4" onClick={() => openImage(item.image)}>
              <img src={item.image} alt="" className="w-100" />
            </div>
          );
        })}
      </div>
    </>
  );
}
