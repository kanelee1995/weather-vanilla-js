function genText(x, y, z, cityName) {
  const rightPanel = document.getElementById('rightPanel');
  const leftPanel = document.getElementById('leftPanel');
  const createHumidityText = document.createElement('p');
  const createTempText = document.createElement('p');
  const createFeelText = document.createElement('p');
  const createCityTest = document.createElement('p');

  createTempText.innerHTML = `${x}`;
  createHumidityText.innerHTML = `${y}`;
  createFeelText.innerHTML = `${z}`;
  createCityTest.innerHTML = `${cityName}`;

  rightPanel.appendChild(createHumidityText);
  rightPanel.appendChild(createTempText);
  rightPanel.appendChild(createFeelText);
  leftPanel.appendChild(createCityTest);
}

export {genText}