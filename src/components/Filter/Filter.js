import React from "react";

const Filter =({handleFilter}) => {
    return (
    <div>
        <select onChange={handleFilter}>
            <option value="title">Title</option>
            <option value="rating">Rating</option>
        </select>
    </div> 
    )
}
export default Filter;