'use strict';

var clickCounter = 0;

var phForm = document.getElementById('image-contest');

phForm.addEventListener('submit', function(event){
  event.preventDefault();
  event.stopPropagation();

  var photoOne = event.target.photoOne.value;
  var photoTwo = event.target.photoTwo.value;
  var photoThree = event.target.photoThree.value;

  photoFunction (photoOne, photoTwo, photoThree);
},false);

function photoFunction(photoOne, photoTwo, photoThree) {
  clickCounter++;
  var h3 = document.getElementById('clicks');
  var clicksTimes = document.createElement('p');
  clicksTimes.textContent = clickCounter;
  h3.appendChild(clicksTimes);
}
