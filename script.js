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
  images.requestFullscreen()
  image.src = imageLibrary[index]
  index += 1
  if (index == imageLibrary.length) {
    index = 0
  }
}


images.addEventListener("click", ImageCycle)