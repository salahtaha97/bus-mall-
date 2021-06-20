' use strict'

let arrayOfImage =[ 'bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','desktop.ini','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','salmon.png','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg',
];

let mallImage = document.getElementById('imageMall');
let leftImage = document.getElementById('leftImage');
let centerImage = document.getElementById('centerImage');
let rightImage = document.getElementById('rightImage');
let count = 0;


let numberOfClicksi = 0;
let leftImagei = 0;
let rightImagei = 0;
let centerImagei = 0;

function image (name , img){
    this.name = name;
    this.img = `./img/${name}.jpg`;
    this.viwes = 0;
    this.numOfClick = 0;
    image.all.push( this );
}

image.all = [];

for (let index = 0; index < arrayOfImage.length; index++) {
    new image(arrayOfImage [index]);
    
}

let rightIndex = randomNumber(0, arrayOfImage.length-1);
let centerIndex = randomNumber(0, arrayOfImage.length-1);
let leftIndex = randomNumber(0, arrayOfImage .length-1);

function render(){
    do{
         centerIndex ;
         leftIndex ;
    }while(rightIndex === centerIndex||rightIndex === leftIndex||centetIndex === leftIndex);


rightImage.src = image.all[rightIndex].src;
centerImage.src = image.all[centerIndex].src;
leftImage.src = image.all[leftIndex].src;

image.all[rightIndex].view++;
image.all[centerIndex].view++;
image.all[leftIndex].view++;
}

function eventMall(event) {
    if(event.target.id === 'rightImage' || event.target.id === 'centerImage' || event.target.id === 'leftImage' && counter < 25){
      render();
      counter++;
  
    }
  
  }
  
  imageContenar.addEventListener('number of clicks', eventMall);
  
  render();

  let numClick=0;
  for(let i=0 ; i<arrayOfImage.length; i++){
    counter();
  }

  






function randomNumber( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  }
  