import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const Search = ({searchMov , rateMov}) => {
  return (
    <div>
     <input placeholder='Search' onChange={(e) => searchMov(e.target.value) } />  
     <br></br>  
     <StarRatingComponent
    name="star" 
    onStarClick={(value) => rateMov(value) }
    emptyStarColor="#333"
    starCount={10} 
    starColor= "#FFB400"
    
/>
    </div>
  )
}

export default Search