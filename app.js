'use strict';

var counter = 0;
var instance = [];
var index1, index2, index3;
var images = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
// var left = document.getElementById('leftPhoto');
// var middle = document.getElementById('middlePhoto');
// var right =

function Image (name, path) {
  this.name = name;
  this.path = path;
  this.timesShown = 0;
  this.timesClicked = 0;
};

function instanceCreator() {
  for (var index = 0; index < images.length ; index++) {
    instance[index] = new Image(images[index], 'img/' + images[index] + '.jpg');
  }
}
instanceCreator();
console.log(instance);

var sourcePhoto = {
  randomNumber: function() {
    var index = Math.floor(Math.random() * images.length) + 0;
    return index;
  },
  showImage: function() {
    var img1 = document.getElementById('photo-1');
    index1 = this.randomNumber();
    img1.setAttribute('src', instance[index1].path);
    instance[index1].timesShown++;

    var img2 = document.getElementById('photo-2');
    index2 = this.randomNumber();
    img2.setAttribute('src', instance[index2].path);
    instance[index2].timesShown++;

    var img3 = document.getElementById('photo-3');
    index3 = this.randomNumber();
    img3.setAttribute('src', instance[index3].path);
    instance[index3].timesShown++;

    if (index1 === index2 || index1 === index3 || index2 === index3) {
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
  event.preventDefault();
  event.stopPropagation();
  index1 = sourcePhoto.showImage();
  console.log('no. of clicks: ', index1);
  instance[index1].timesClicked++;
  sourcePhoto.showImage();
}

var imageTwo = document.getElementById('photo-2');
imageTwo.addEventListener('click', photoFunction,false);
function photoFunction() {
  event.preventDefault();
  event.stopPropagation();
  instance[index2].timesClicked++;
  sourcePhoto.showImage();
}

var imageThree = document.getElementById('photo-3');
imageThree.addEventListener('click', photoFunction,false);
function photoFunction() {
  event.preventDefault();
  event.stopPropagation();
  instance[index3].timesClicked++;
  sourcePhoto.showImage();
}

var context = document.getElementById('chart-images').getContext('2d'); //rendering a 2d chart

var someFunction = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

var imagesChart = new Chart (context,{ //second parameter is always an object
  type: 'bar',
  data: {
    labels: images,
    datasets: [{
      label: 'Votes Bars',
      data: chartData,
      backgroundColor: chartColors
    }]
  },
  options: someFunction
} );
