import React from "react";
import { Link } from "react-router-dom";

export default function CategoryGames({ item }) {
  return (
    <>
      <div className="col-md-3 cursor_pointer" key={item.id}>
        <div className="card main_bg ">
          <Link to={`/game/${item.id}`} className="text-decoration-none">
            <figure className="position-relative">
              <img src={item.thumbnail} alt="" className="w-100 rounded" />
            </figure>
            <div className="card-body main_color">
              <div className="d-flex justify-content-between align-content-center">
                <h5 className="card-title fw-bold align-self-center">
                  {item.title}
                </h5>
                <p className="free_btn text-white align-self-center text-uppercase">
                  Free
                </p>
              </div>
              <p className="discription">{item.short_description}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
