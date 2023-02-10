import React from "react";
import "./MovieCard.css";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movieCard">
      <img className="movieImg" src={posterURL} alt={title} />
      {/* <p>{rating}</p> */}
      <StarRatingComponent
        name= "star" /* name of the radio input, it is required */
        value={rating} /* number of selected icon (`0` - none, `1` - first) */
        starCount= {10}
      />
      <h2>{title}</h2>
      <p>Description: {description}</p>
    </div>
  );
};

export default MovieCard;
