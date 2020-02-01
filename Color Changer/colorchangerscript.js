const colorButton = document.getElementById('color-change');
const resetButton = document.getElementById('color-reset');

colorButton.addEventListener('click', function() {
  // create an array that store 3 random numbers between 0-255;
  const hexaColor = [];
  while (hexaColor.length < 3) {
    const number = Math.floor(Math.random() * 255);
    // if(randomNumbers.indexOf(r) === -1)
    hexaColor.push(number);
  }
  // change the background color of BODY element using rgb(red,green,blue) in hexadecimal
  // the red green blue is random number that we generate;
  const randomColor =
    'rgb(' + hexaColor[0] + ', ' + hexaColor[1] + ', ' + hexaColor[2] + ')';
  document.body.style.backgroundColor = randomColor;
  console.log(randomColor);
});

// reset background to white
resetButton.addEventListener('click', function() {
  document.body.style.backgroundColor = 'rgb(255,255,255)';
});

// change color using the slider;

const slider = document.getElementsByClassName('color-input');
const [redSlider, greenSlider, blueSlider] = slider;

function changeColor() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

redSlider.addEventListener('change', changeColor);
greenSlider.addEventListener('change', changeColor);
blueSlider.addEventListener('change', changeColor);

// change background color using mousemove

document.body.addEventListener('mousemove', function(e) {
  const xPos = Math.floor((event.clientX / window.innerWidth) * 255);
  const yPos = Math.floor((event.clientY / window.innerWidth) * 255);
  document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 128)`;
});
