import React from 'react'
import { PokemonSchema } from '../../types/PokemonSchema'
import './SearchResult.css'
interface SearchResultProps{
  selectPokemons:PokemonSchema|undefined
}
export default function SearchResult({selectPokemons}:SearchResultProps) {
  const {name,id,height,weight,base_experience,sprites}=selectPokemons||{}
  return (
    <div className='search-result-container'>
        {selectPokemons ? (
          <div className='search-result'>
            <img className='image' src={sprites?.animated || sprites?.normal} alt='hello'/>
            <p>Name: {name}</p>
            <p>Id: {id}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Base Exp: {base_experience}</p>
          </div>
        ) :
      <h2>Welcome to the Pokodex</h2>}
       
    </div>
  )
}
