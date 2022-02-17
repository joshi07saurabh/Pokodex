import React from 'react'
import './Search.css'
interface SearchProps{
  OnInputChange:(inputVal:string)=>void
}
export default function Search({OnInputChange}:SearchProps) {
  
  return (
    <div className='search-container'>
        <input onChange={(e)=>{
          OnInputChange(e.target.value)
        }} className='search' type="search" placeholder='Searh here'/>
    </div>
  )
}
