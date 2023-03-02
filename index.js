function startCamera() {
  const configs = {
    video: {
      facingMode: "user",
    },
  };

  navigator.mediaDevices
    .getUserMedia(configs)
    .then((stream) => {
      const videoElement = document.querySelector("#camera");
      const videoElement2 = document.querySelector("#camera-2");
      videoElement.srcObject = stream;
      videoElement2.srcObject = stream;

      videoElement.onloadedmetadata = (event) => {
        videoElement.play();
      };

      videoElement2.onloadedmetadata = (event) => {
        videoElement2.play();
      };
    })
    .catch((error) => {
      console.log(error);
    });
}

window.addEventListener("DOMContentLoaded", startCamera());
