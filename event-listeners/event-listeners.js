// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg','./imgs/cat.jpg','./imgs/cat2.jpg','./imgs/cat3.jpg','./imgs/cat4.jpg'];
var currentIndex = 0;
var photo=document.getElementsByTagName("img");
function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  photo[0].src=pictures[currentIndex]

}