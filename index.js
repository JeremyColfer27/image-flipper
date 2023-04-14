const video = document.getElementById('video');
const flipButton = document.getElementById('flipButton');

let isFlipped = false;


// Request access to the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    // Set the video element's source object to the camera stream
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error('Could not access camera:', error);
  });

  flipButton.addEventListener('click', function(){
    if(isFlipped){
        video.style.transform = "scaleX(1)";
        isFlipped = false;
    }
    else{
        video.style.transform = "scaleX(-1)";
        isFlipped = true;
    }
})