// Displays Grid of images during TV or Movie Browse

import React from "react";
import { Link } from "react-router";
import { Image } from "react-bootstrap";

const GridCard = ({ data, type }) => {
  return (
    <div className="gridImages">
      {data.map(imageData => {
        return (
          <div className="card" key={imageData.id}>
            <Link to={"detail/" + type + "/" + imageData.id}>
              <Image
                responsive
                src={"https://image.tmdb.org/t/p/w154" + imageData.poster_path}
              />
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
