import React from 'react'
import PokoCard from '../PokoCard/PokoCard'
import './PokodexList.css'
import {PokemonSchema} from '../../types/PokemonSchema'

interface ListProps{
  searchPokemons:PokemonSchema[]
  handleClick:(PokemonName:string)=>void
}
export default function PokodexList({searchPokemons,handleClick}:ListProps) {
  return (
    <div className='list-container'>
          {
            searchPokemons.map((pokemon)=>{
              return(
                pokemon.name && (
                <PokoCard
                key={pokemon.id}
                name={pokemon.name}
                spriteUrl={pokemon.sprites.normal}
                handleClick={handleClick}
                />
                )
              );
            })
          }
    </div>
  )
}
