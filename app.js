'use strict';

var clickCounter = 0;

var images = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

function Image (name, path) {
  this.name = name;
  this.path = path;
};

var index = randomNumber();
var instanceImage = new Image (images[index], 'img/' + images[index] + '.jpg');
console.log(instanceImage);
var img = document.getElementById('photo-1');

img.setAttribute('src', instanceImage.path);
// showImage.textContent = image[index] + '.jpg';
// img.appendChild(showImage);

function randomNumber() {
  var index = Math.floor(Math.random() * images.length) + 0;
  return index;
}

var imageOne = document.getElementById('photo-1');
imageOne.addEventListener('click', photoFunction,false);
function photoFunction() {
  console.log(index);
  event.preventDefault();
  event.stopPropagation();
  clickCounter++;
}

// var h3 = document.getElementById('clicks');
// var showImage = document.createElement('p');
// showImage.textContent = image[index] + '.jpg';
// h3.appendChild(clicksTimes);
