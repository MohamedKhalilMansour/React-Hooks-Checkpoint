import React from "react";
import {Link, useParams } from "react-router-dom";

const Description = ({ movie }) => {
  const { id } = useParams();
  const foundMovie = movie.find((el) => el.id === +id);
  return (
    
     <div className="detail">
        <div style={{textAlign:'center',backgroundColor:'black'}}> </div>
        <div style={{fontSize:30,color:'red',fontSize:'x-large',textAlign:'center',fontWeight:'bold'}}>{foundMovie.title}</div> 
        <iframe  width="853" height="480"  src={foundMovie.trailer} title="YouTube video player" frameborder="0"  display='block'  allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div style={{fontSize:30,color:'red',fontSize:'x-large',textAlign:'center',fontWeight:'bold'}}>DESCRIPTION</div> 
        <div style={{color:'white',backgroundColor:'black', fontSize:'large',margin:'30px'}}>{foundMovie.description}</div>
        <Link to={'/'}>
        <button className="btn btn-danger" style={{color:'white',backgroundColor:'black', fontSize:'large'}}>View Back</button>
        </Link>
    </div>
  );
};

export default Description;
