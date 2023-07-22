import React, { useState, useEffect } from 'react';
import StarshipCard from './StarshipCard';
import { getAllStarships } from './services/sw-api';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function getStarships() {
      const starships = await getAllStarships();
      setStarships(starships);
    }
    getStarships();
  }, []);

  return (
    <div className="card-container">
      {starships.map((starship) => (
        <StarshipCard key={starship.id} name={starship.name} />
      ))}
    </div>
  );
  
  
}

export default App;