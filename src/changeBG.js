const now = new Date();

function changeBG() {
if (now.getHours >= '18') {
  // console.log('Night');
  document.getElementById('container').style.backgroundImage = `url(/src/img/night.jpeg)`;

} else if (now.getHours <= '18') {
  document.getElementById('container').style.backgroundImage = `url(/src/img/night.jpeg)`;
}

  // console.log(now.getHours());
}

export {changeBG}
