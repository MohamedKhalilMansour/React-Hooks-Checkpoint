import React, { useState, useEffect} from 'react'
import './App.css';
import MovieCard from './components/MovieCard/MovieCard';
import Filter from './components/Filter/Filter';
import MovieList from './components/MovieList/MovieList';
import AddMovie from './components/AddMovie/AddMovie';
import Search from './components/Search/Search';

const movieList = [
  {id: '1',
title: 'Pulp Fiction',
description: 'Les vies de deux hommes de main, du boxeur, de la femme du gangster et de deux braqueurs entremêlent dans quatre histoires de violence et de rédemption.',
posterURL: 'https://m.media-amazon.com/images/M/MV5BMjc2ODkzZDEtOWI3Ny00NzBhLWFlY2QtMWVlOTE4YTRjZGZkXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1000_.jpg',
rating: '8'},
  {id: '2' ,
    title: 'Inglourious Basterds' ,
    description: 'Dans la France occupée de la Seconde Guerre mondiale, un projet assassinat de dirigeants nazis par un groupe de soldats juifs américains coïncide avec les plans de vengeance de la propriétaire du cinéma.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BZjViYjE5ZDgtZjQ4MC00MDNhLTg3MDAtMjljNTlkMjAyNDg1XkEyXkFqcGdeQXVyMTMxODYzNjg@._V1_FMjpg_UX1000_.jpg',
    rating: '7'
  },
  {id: '3' ,
    title: 'Boulevard de la mort',
    description: 'Deux groupes de femmes voluptueuses sont traquées à des moments différents par un cascadeur dérangé qui se sert de ses voitures ""résitantes à la mort"" pour exécuter ses plans meurtriers.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNjJkZmMyYzAtZTgzMi00ZWM0LTg4MmItNWY3YjhlNGJmZWYxXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UX1000_.jpg' ,
    rating: '9'
  }
]

function App() {
 
  const [keyWords,setKeyWords] = useState('')
 const [rating,setRating] = useState(1)
  const [list, setList] = useState(movieList) 
  
 
  const byTitle = () => {
    const toSort = movieList 
    const newList = toSort.sort((a, b) => {
      let ta = a.title.toLowerCase();
      let tb = b.title.toLowerCase();
      if (ta < tb) {
        return -1;
      } 
      if (ta > tb) {
        return 1;
      }
      return 0;
    });
    setList([...newList])
  }
  const byRating = () => {
    const toSort = movieList ;
    const newList = toSort.sort((a, b) => {
      return a.rating - b.rating
    });
    setList([...newList])
  }
const handleFilter = (el) => {
  if (el.target.value === 'title') {
    byTitle()
  } else if (el.target.value === 'rating') {
    byRating()
  }else {
    setList([...movieList])
  }
}

  const addNewMovie = (newMovie) => {
    setList([...list , newMovie ])
  }

const searchMov = (text) => {
setKeyWords(text)
}

const rateMov = (number) => {
  setRating(number)
}

  return (
    <div className="App">
      <AddMovie addNewMovie={addNewMovie}></AddMovie>
      <p>Filter By:</p>
      <Search searchMov={searchMov} rateMov={rateMov} ></Search>
      <div>
       <p>Sort By:</p>
       <Filter handleFilter={handleFilter} />
      </div>
      <MovieList list={list.filter(el => el.title.toLowerCase().includes(keyWords.toLowerCase().trim()) && el.rating >= rating)} />
     
    </div>
  );
}

export default App;
