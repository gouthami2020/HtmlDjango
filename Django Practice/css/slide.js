var i = 0;
var img = [];
var time = 3000;
img[0] = 'Farm.png';
img[1] = 'Tulips.jpg';
img[2] = 'Lighthouse.jpg';
img[3] = 'Koala.jpg';

function changeImg(){
  document.slide.src = img[i];
  if(i < img.length - 1){
    i++
  } else{
    i = 0;
  }
   setTimeout("changeImg()", time);
}
window.onload = changeImg;
