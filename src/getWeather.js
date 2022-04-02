import { genText } from './genText'

async function getWeather(city) {

  if ((document.getElementById('leftPanel').innerHTML === '') && (document.getElementById('rightPanel').innerHTML === '')) {

    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=20fccb124e29dc07ede0a07abdaa72c1`, { mode: 'cors' });
      const weather = await response.json(); //wait until that promise settles and returns its result.
      genText((`Humidity: ` + weather[`main`][`humidity`] + `%`), (`Temperature: ` + weather[`main`][`temp`] + `°`), (`Feels like: ` + weather[`main`][`feels_like`] + `°`), `${city}`);
    } catch (error) {
      alert(`Error - invalid input`);
    }

  } else if ((document.getElementById('leftPanel').innerHTML !== '') || (document.getElementById('rightPanel').innerHTML !== '')) {

    document.getElementById('rightPanel').innerHTML = '';
    document.getElementById('leftPanel').innerHTML = '';

    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=20fccb124e29dc07ede0a07abdaa72c1`, { mode: 'cors' });
      const weather = await response.json(); //wait until that promise settles and returns its result.
      genText((`Humidity: ` + weather[`main`][`humidity`] + `%`), (`Temperature: ` + weather[`main`][`temp`] + `°`), (`Feels like: ` + weather[`main`][`feels_like`] + `°`), `${city}`);
    } catch (error) {

      alert(`Error - invalid input`);
    }
  }
}
export { getWeather }