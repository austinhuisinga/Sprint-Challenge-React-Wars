import React, { useState, useEffect } from 'react';
import CharacterCards from '././CharacterCards';
import axios from 'axios';

function CharacterList () {
  // Set states of character and page number
  const [char, setChar] = useState([]);
  const [page, setPage] = useState(1);

  // Grab Star Wars API
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)
    .then(response => {
      // console.log(response.data);
      setChar(response.data.results);
    })
    .catch(error => {
      console.log('you messed up', error);
    })
  }, [page])

  // set click handlers on page buttons
  const nextPage = e => {
    setPage(page + 1);
  }

  const previousPage = e => {
    setPage(page - 1);
  }
  // // hide previous button when no previous page exists
  // let nextButton = document.getElementsByClassName('next');
  // if(page === 1) {
  //   nextButton.style.display = 'none';
  // }
  // const [showButton, setShowButton] = useState(true);
  
  // {page ===1 ? setShowButton(false)}

  return (
    <div>
      <div>
        {char.map((input, index) => {
          return <CharacterCards key={index} character={input} />
        })}
      </div>
      <div>
        <button className='next' onClick={previousPage}>Previous</button>
        <button className='previous' onClick={nextPage}>Next</button>
        
      </div>
    </div>
  )
}

export default CharacterList;

// add an if/else (ternery) to hide (or maybe shade it out) previous when it's not needed
// add if else where if height/mass is unknown, hide units of measurement(cm/kg)
