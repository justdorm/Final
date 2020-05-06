navigator.mediaDevices
  .getUserMedia({ audio: false, video: true })
  .then(function(stream) {
    window.stream = stream;
    document.getElementById("video").srcObject = stream;
  });

let imageLibrary = ["Images/concept art.jpg", "Images/painting2.jpg", "Images/painting3.jpg"]
let index = 0
let images = document.getElementById("images")
let image = document.getElementById("image")
function ImageCycle(){
  openFullscreen()
  image.src = imageLibrary[index]
  index += 1
  if (index == imageLibrary.length) {
    index = 0
  }
}

function openFullscreen() {
  if (images.requestFullscreen) {
    images.requestFullscreen();
  } else if (images.mozRequestFullScreen) { /* Firefox */
    images.mozRequestFullScreen();
  } else if (images.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    images.webkitRequestFullscreen();
  } else if (images.msRequestFullscreen) { /* IE/Edge */
    images.msRequestFullscreen();
  }
}

images.addEventListener("click", ImageCycle)
