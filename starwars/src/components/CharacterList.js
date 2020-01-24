import React, { useState, useEffect } from 'react';
import CharacterCards from '././CharacterCards';
import axios from 'axios';

function CharacterList () {
  const [char, setChar] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)
    .then(response => {
      console.log(response.data.results);
      setChar(response.data.results);
    })
    .catch(error => {
      console.log('you messed up', error);
    })
  }, [page])

  const nextPage = e => {
    setPage(page + 1);
  }

  const previousPage = e => {
    setPage(page - 1);
  }

  return (
    <div>
      <div>
        {char.map((input, index) => {
          return <CharacterCards key={index} character={input} />
        })}
      </div>
      <div>
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
        
      </div>
    </div>
  )
}


export default CharacterList;