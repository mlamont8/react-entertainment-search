// Displays Grid of images during TV or Movie Browse

import React from "react";
import { Link } from "react-router";
import { Image } from "react-bootstrap";

const GridCard = ({ data, type }) => {
  return (
    <div className="gridImages">
      {data.map(imageData => {
        const title = type === "tv" ? imageData.name : imageData.title;
        const overview =
          imageData.overview
            .split(" ")
            .slice(0, 15)
            .join(" ") + "...";
        return (
          <div className="card" key={imageData.id}>
            <Link to={"detail/" + type + "/" + imageData.id}>
              <div className="gridImageBox">
                <img
                  className="gridImage"
                  src={
                    "https://image.tmdb.org/t/p/w154" + imageData.poster_path
                  }
                />
              </div>
              <div className="gridCardContent">
                <h2>{title}</h2>
                <p>{overview}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

GridCard.propTypes = {
  type: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired
};

export default GridCard;
