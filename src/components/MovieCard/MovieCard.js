import React from "react";
import "./MovieCard.css";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";


const MovieCard = ({ el }) => {
  return (
    <div className="movieCard">
      <img className="movieImg" src={el.posterURL} alt={el.title} />
      {/* <p>{rating}</p> */}
      <StarRatingComponent
        name= "star" /* name of the radio input, it is required */
        value={el.rating} /* number of selected icon (`0` - none, `1` - first) */
        starCount= {10}
      />
      <h2>{el.title}</h2>
     
     <span> <Link to={`/movie/${el.id}`}>{el.trailer}</Link></span>
    </div>
  );
};

export default MovieCard;
