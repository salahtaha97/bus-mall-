' use strict'



const imageSsction = document.getElementById('imageSection');
const leftImage = document.getElementById('leftImage');
const centerImage = document.getElementById('centerImage');
const rightImage = document.getElementById('righImage');

let reviwes =0;
let count = 0;



let arrayOfImage =[ 'banana.jpg',
'bathroom.jpg',
'boots.jpg',
'breakfast.jpg',
'bubblegum.jpg',
'chair.jpg',
'cthulhu.jpg',
'dog-duck.jpg',
'dragon.jpg',
'pen.jpg',
'pet-sweep.jpg',
'scissors.jpg',
'shark.jpg',
'sweep.png',
'tauntaun.jpg',
'unicorn.jpg',
'usb.gif',
'water-can.jpg',
'wine-glass.jpg'
];

function imageS (name , src){
    this.name = name;
    this.source = `./image/${src}`;
    this.viwes = 0;
    this.numOfClick = 0;
    imageS.all.push(this);
   
}

imageS.all = [];

for (let i= 0; i < arrayOfImage.length; i++) {
  let imagesName = arrayOfImage[i].split('.')[0];
    new imageS(imagesName,arrayOfImage [i]);
    
}

function renderImage (){
  let rightIndex = randomNumber(0, arrayOfImage.length-1);
let centerIndex;
let leftIndex ;
do {
  centerIndex = randomNumber(0, arrayOfImage.length-1);
  leftIndex = randomNumber(0, arrayOfImage .length-1);
} while (rightIndex === centerIndex||rightIndex === leftIndex||centerIndex === leftIndex);

// rightImage.src = imageS.all[rightIndex].source;
// centerImage.src = imageS.all[centerIndex].source;

// leftImage.src = imageS.all[leftIndex].source;

imageS.all[rightIndex].view++;
imageS.all[centerIndex].view++;
imageS.all[leftIndex].view++;
}

function numClicks(event){
  if((event.target.id === 'rightImage' || event.target.id === 'centerImage' || event.target.id === 'leftImage')&& count<reviwes){

  }
  

}

imageSection.addEventListener ('click', numClicks);




renderImage();










  






function randomNumber( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  }
  
  let ctx = document.getElementById( 'myChart' ).getContext( '2d' );
  
    new Chart( ctx, {
      type: 'bar',
      data: [],
        labels: name,
        datasets: [],
          label:[] ,
          data: view, 
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          
          
        },
      {
        label: '# of clicks',
          data: click, 
          backgroundColor: 'rgba(255, 206, 86, 1)',
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)']
      }
      ]
      },
      options: 
        scales: 
          y: 
            beginAtZero: true
          }
        }
      }
    } );
  