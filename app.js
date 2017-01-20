'use strict';

var counter = 0;
var maxClicks = 0; //this goes up to 25 clicks based on the condition at the bottom
var number; // new random number
var instances = [];
var currentArary = []; // for 3 random numbers
var historyArray = []; // get the 3 old numbers to check if they are in the array

var chartColors = ['#800080','#FF00FF','#000080','#0000FF','#008080','#00FFFF','#008000','#00FF00','#FF0000','#808080','#800080','#FF00FF','#000080','#0000FF','#008080','#00FFFF','#008000','#00FF00','#FF0000','#808080'];
var images = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

var img1 = document.getElementById('photo-1');
var img2 = document.getElementById('photo-2');
var img3 = document.getElementById('photo-3');
var context = document.getElementById('chart-images').getContext('2d'); //rendering a 2d chart - WARNING! DONT TYPE "2D" instead of "2d"

function Image (name, path) {
  this.name = name;
  this.path = path;
  this.timesShown = 0;
  this.timesClicked = 0;
};

function instancesCreator() {
  for (var index = 0; index < images.length ; index++) {
    instances[index] = new Image(images[index], 'img/' + images[index] + '.jpg');
  }
}
instancesCreator();
console.log('instances',instances);

var sourcePhoto = {
  randomNumber: function() {
    number = Math.floor(Math.random() * images.length) + 0;
    return number;
  },
  showImage: function() {
    historyArray = currentArary;
    currentArary = [];
    for (var t = 0; t < 3 ; t++){
      do {
        this.randomNumber();
      } while (historyArray.includes(number) || currentArary.includes(number));
      currentArary.push(number);
    }

    img1.setAttribute('src', instances[currentArary[0]].path);
    img2.setAttribute('src', instances[currentArary[1]].path);
    img3.setAttribute('src', instances[currentArary[2]].path);
  }
};
sourcePhoto.showImage();

//listeners for three images
img1.addEventListener('click', photoFunction1,false);
function photoFunction1() {
  instances[currentArary[0]].timesClicked++;
  maxClicks++;
  console.log(instances, 'iiiiiii');
  removeListener();
  sourcePhoto.showImage();
}

img2.addEventListener('click', photoFunction2,false);
function photoFunction2() {
  instances[currentArary[1]].timesClicked++;
  maxClicks++;
  console.log('max clicks' , maxClicks);
  removeListener();
  sourcePhoto.showImage();
}

img3.addEventListener('click', photoFunction3,false);
function photoFunction3() {
  console.log();
  instances[currentArary[2]].timesClicked++;
  maxClicks++;
  removeListener();
  sourcePhoto.showImage();
}

//stops listening when we click 25 times
function removeListener (){
  if (maxClicks === 25) {
    console.log('inside if');
    img1.removeEventListener('click', photoFunction1);
    img2.removeEventListener('click', photoFunction2);
    img3.removeEventListener('click', photoFunction3);
    img1.remove();
    img2.remove();
    img3.remove();
    showAllImages();
    createChart();
  }
}

//show images on page - after clicks
function showAllImages() {
  var imag = document.getElementById('displayImages');
  for (var i = 0; i < images.length; i++) {
    var div = document.createElement('div');
    div.textContent = instances[i].name;

    var p = document.createElement('p');
    p.textContent = 'Times Shown: ' + instances[i].timesShown + ' - Times Clicked: ' + instances[i].timesClicked ;
    div.appendChild(p);

    var img = document.createElement('img');
    img.setAttribute('src',instances[i].path);
    div.appendChild(img);
    imag.appendChild(div);
  }
}

//creating the Chart
function createChart () {
  var chartData = [];
  for (var i = 0 ; i < instances.length; i++) {
    chartData.push(instances[i].timesClicked);
    console.log(instances[i].timesClicked);
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
  var imagesChart = new Chart (context,{
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
