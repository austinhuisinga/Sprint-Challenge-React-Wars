import React from 'react';
import './StarWars.css';

function CharacterCards ({character}) {


  return(
    <div>
      <h2>{character.name}</h2>
      <h4 className='capitalize'>Gender: {character.gender}</h4>
      <h4>Height: {character.height}cm</h4>
      <h4>Weight: {character.mass}kg</h4>
      <h4 className='capitalize'>Eye Color: {character.eye_color}</h4>
      <h4 className='capitalize'>Skin Color: {character.skin_color}</h4>
    </div>
  )
}

export default CharacterCards;