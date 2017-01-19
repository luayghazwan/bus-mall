'use strict';

var counter = 0;
var instance = [];
var index1, index2, index3;
var number;
var currentArary = [];
var historyArray = [];
var maxClicks = 0;
var imagesChart;
var chartColors = 'red';
var images = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
// var left = document.getElementById('leftPhoto');
// var middle = document.getElementById('middlePhoto');
// var right =
var img1 = document.getElementById('photo-1');
var img2 = document.getElementById('photo-2');
var img3 = document.getElementById('photo-3');
var context = document.getElementById('chart-images').getContext('2d'); //rendering a 2d chart

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
console.log('instance',instance);

var sourcePhoto = {
  randomNumber: function() {
    number = Math.floor(Math.random() * images.length) + 0;
    return number;
  },
  showImage: function() {
    historyArray = currentArary;
    currentArary = [];
    do {
      this.randomNumber();
    } while (historyArray.includes(number) || currentArary.includes(number));
    historyArray.push(currentArary);
  }
};
sourcePhoto.showImage();

img1.addEventListener('click', photoFunction1,false);
function photoFunction1() {
  instance[index1].timesClicked++;
  maxClicks++;
  console.log(instance, 'iiiiiii');
  removeListener();
  sourcePhoto.showImage();
}

img2.addEventListener('click', photoFunction2,false);
function photoFunction2() {
  instance[index2].timesClicked++;
  console.log('times for photo 2 ' ,instance[index2].timesClicked);
  maxClicks++;
  console.log('max clicks' , maxClicks);
  removeListener();
  sourcePhoto.showImage();
}

img3.addEventListener('click', photoFunction3,false);
function photoFunction3() {
  console.log();
  instance[index3].timesClicked++;
  maxClicks++;
  removeListener();
  sourcePhoto.showImage();
}

function removeListener (){
  if (maxClicks === 5) {
    console.log('inside if');
    img1.removeEventListener('click', photoFunction1);
    img2.removeEventListener('click', photoFunction2);
    img3.removeEventListener('click', photoFunction3);
    img1.remove();
    img2.remove();
    img3.remove();
    // voteBlock.remove();
    showAllImages();
    createChart();
  }
}

//results page after clicks
function showAllImages() {
  var imag = document.getElementById('displayImages');
  for (var i = 0; i < images.length; i++) {
    var div = document.createElement('div');
    div.textContent = instance[i].name + ' ' + ' - Times Shown: ' + instance[i].timesShown + ' ' + ' ,Times Clicked: ' + instance[i].timesClicked ;
    var img = document.createElement('img');
    img.setAttribute('src',instance[i].path);
    div.appendChild(img);
    imag.appendChild(div);
  }
}

function createChart () {
  var chartData = [];
  for (var i = 0 ; i < instance.length; i++) {
    chartData.push(instance[i].timesClicked);
    console.log(instance[i].timesClicked);
  };
  var chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  imagesChart = new Chart (context,{
    //second parameter is always an object
    type: 'bar',
    data: {
      labels: images,
      datasets: [{
        label: 'Votes Bars',
        data: chartData,
        backgroundColor: chartColors
      }]
    },
    options: chartOptions
  } );
}
