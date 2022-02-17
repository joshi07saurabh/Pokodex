import React from 'react'
import './Pokodex.css'
import Search from '../Search/Search'
import SearchResult from '../SearchResult/SearchResult'
import PokodexList from '../PokodexList/PokodexList'
import {PokemonSchema} from '../../types/PokemonSchema'

interface PokodexProps{
  searchPokemons:PokemonSchema[],
  OnInputChange :(inputVal:string)=>void;
  selectPokemons:PokemonSchema | undefined
  handleClick:(PokemonName:string) =>void;
}
export default function Pokodex({searchPokemons, OnInputChange,handleClick, selectPokemons}:PokodexProps) {

  return (
    <div className='pokodex-container'>
        <div className="pokodex-left">
            <Search OnInputChange={OnInputChange}/>
            <PokodexList searchPokemons={searchPokemons} handleClick={handleClick}/>
            
        </div>
        <div className="pokodex-right">
            <SearchResult  selectPokemons={ selectPokemons}/>
        </div>
    </div>
  )
}
