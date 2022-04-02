import { getWeather } from './getWeather'
import { changeBG } from './changeBG'

const cityName = document.getElementById('cityName');
// const find = document.getElementById('find');

cityName.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (cityName.value === '') {
      console.log(`City not found`);
    } else if (cityName.value !== '') {
      getWeather(cityName.value);
    } 
  }
})

changeBG();
