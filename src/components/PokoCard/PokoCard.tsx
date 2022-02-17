import React from 'react'
import { PokemonSchema } from '../../types/PokemonSchema'
import './PokoCard.css'

interface CardProps{
  spriteUrl?:string;
  name:string
  handleClick:(PokemonName:string)=>void
}
export default function PokoCard({spriteUrl,name,handleClick}:CardProps) {
  return (
    <div onClick={()=>handleClick(name)} className='card-container'>
        <img className='image' alt="pokemon" src={spriteUrl}/>
        <p>{name}</p>
       
    </div>
  )
}
