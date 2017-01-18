'use strict';

var counter = 0;
var instances = [];
var images = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

function Image (name, path) {
  this.name = name;
  this.path = path;
  this.imageCounter = 0;
};

function instance() {
  for (var index = 0; index < images.length ; index++) {
    instances[index] = new Image(images[index], 'img/' + images[index] + '.jpg');
  }
}
instance();
console.log(instances);

var sourcePhoto = {
  randomNumber: function() {
    var index = Math.floor(Math.random() * images.length) + 0;
    return index;
  },
  showImage: function() {
    var img1 = document.getElementById('photo-1');
    var index = this.randomNumber();
    img1.setAttribute('src', instances[index].path);

    var img2 = document.getElementById('photo-2');
    var index2 = this.randomNumber();
    img2.setAttribute('src', instances[index2].path);

    var img3 = document.getElementById('photo-3');
    var index3 = this.randomNumber();
    img3.setAttribute('src', instances[index3].path);

    if (index === index2 || index === index3 || index2 === index3) {
      this.showImage();
    }
  }
};
sourcePhoto.showImage();

// console.log(instanceImage);

// showImage.textContent = image[index] + '.jpg';
// img.appendChild(showImage);

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
