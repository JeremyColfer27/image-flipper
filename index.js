const video = document.getElementById('video');
const flipButton = document.getElementById('flipButton');

let isFlipped = false;

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  console.log('The user is on a mobile device: ', navigator.userAgent);
  // Request access to the user's camera
  navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: "environment" } } })
  .then((stream) => {
    // Set the video element's source object to the camera stream
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error('Could not access camera:', error);
  });
} 


else {
    console.log('The user is on a desktop device: ', navigator.userAgent);
    // Request access to the desktop camera
    navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      // Set the video element's source object to the camera stream
      video.srcObject = stream;
    })
    .catch((error) => {
      console.error('Could not access camera:', error);
    });
}



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