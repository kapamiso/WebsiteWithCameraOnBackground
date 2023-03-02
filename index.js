async function getMediaStream() {
  var mediaStream = null;

  var constraints = {
    audio: false,
    video: {
      width: { ideal: 640 },
      height: { ideal: 480 },
      facingMode: "environment",
    },
  };

  try {
    mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    let video = document.querySelector("#camera");
    video.srcObject = mediaStream;
    video.onloadedmetadata = (event) => {
      video.play();
    };

    let video2 = document.querySelector("#camera-2");
    video2.srcObject = mediaStream;
    video2.onloadedmetadata = (event) => {
      video2.play();
    };
    
  } catch (err) {
    console.error(err.message);
  }
}

function startCamera() {
  const configs = { video: true };

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

window.addEventListener("DOMContentLoaded", getMediaStream());
