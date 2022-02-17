import React, { Component } from 'react'
import { pokemonData } from '../../data/pokodata'
import Pokodex from '../Pokodex/Pokodex'
import { UnpatchedPokemonSchema } from '../../types/PokemonSchema'
import {PokemonSpriteSchema} from '../../types/PokemonSchema'
import {PokemonSchema} from '../../types/PokemonSchema'
import './App.css'
interface AppState{
  searchField:String,
  allPokemons:PokemonSchema[],
  searchPokemons:PokemonSchema[],
  selectPokemons:PokemonSchema | undefined
}
export default class App extends Component<any,AppState> {
  state={
    searchField:"",
    allPokemons:[],
    searchPokemons:[],
    selectPokemons:undefined
  }
  patchPokemonData=(pokemons:UnpatchedPokemonSchema[]) =>{
    const patchedPokemons=pokemons.map((pokemon)=>{
        let parsedSprites:PokemonSpriteSchema ={
          normal:undefined,
          animated:undefined
        };
        try{
          parsedSprites=pokemon.sprites && JSON.parse(pokemon.sprites);
        }
        catch(e){
          console.log("exception is ", e);
        }
        const patchedPokemon:PokemonSchema={
          ...pokemon,
          sprites:parsedSprites
        }
        return patchedPokemon;
    })
    return patchedPokemons;
  }
  componentDidMount(){
    // patched the stringfy sprites
    const patchedPokemons:PokemonSchema[]=this.patchPokemonData(
      pokemonData
      );
      console.log(patchedPokemons )
      this.setState({
        allPokemons:patchedPokemons,
        searchPokemons:patchedPokemons
      })
  }
  handleUserInput = (inputVal:string) =>{
    const {allPokemons}=this.state;
    const searchPokemons = allPokemons.filter((pokemon:PokemonSchema)=>{
      return (
        pokemon.name && pokemon.name.toLowerCase().includes(inputVal.toLowerCase())
      )
    }

    )
    this.setState({
      searchField:inputVal,
      searchPokemons
    })
  }
  handleClick = (PokemonName:string)=>{
    const {allPokemons}=this.state;
    const selectPokemons = allPokemons.find(
      (pokemon:PokemonSchema)=>pokemon.name===PokemonName
    )
    this.setState({selectPokemons})
  }
  render() {
    return (
      <div className='container'>
        <h1>Pokodex</h1>
          <Pokodex searchPokemons={this.state.searchPokemons} OnInputChange={this.handleUserInput} selectPokemons={this.state.selectPokemons} handleClick={this.handleClick}/>
      </div>
    )
  }
}
