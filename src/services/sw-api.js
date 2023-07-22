import axios from 'axios';

export function getAllStarships() {
  return axios.get('https://swapi.dev/api/starships/')
    .then(response => response.data.results)
    .catch(error => console.log(error));
}

