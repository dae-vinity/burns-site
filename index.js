const images = [
  "url(assets/images/blueassgarage.png)",
  "url(assets/images/sneakyweaky.png)",
  "url(assets/images/garryanddima.png)",
  "url(assets/images/theyreallylikelights.jpg)",
  "url(assets/images/bohemiumrapsody.jpg)",
  "url(assets/images/thispictureiscoolngl.jpg)",
  "url(assets/images/thetrioofalltime.jpg)",
  "url(assets/images/red.jpg)",
  "url(assets/images/nahtheyactuallyturnedintoaghost.jpg)",
  "url(assets/images/lustisfilledwithsillyactions.jpg)",
  "url(assets/images/sheseessomedrugsandmoney.jpg)",
  "url(assets/images/whartthefuk.jpg)",
  "url(assets/images/gayasf.jpg)",
  "url(assets/images/podmoskovithink.png)",
  "url(assets/images/guh.png)",
];

let lastIndex = -1;
const body = document.body;

const overlay1 = document.createElement("div");
const overlay2 = document.createElement("div");

[overlay1, overlay2].forEach((overlay) => {
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.zIndex = "-1";
  overlay.style.backgroundSize = "cover";
  overlay.style.backgroundPosition = "center";
  overlay.style.transition = "opacity 2s ease-in-out";
  document.body.prepend(overlay);
});

overlay1.style.backgroundImage = images[0];
overlay1.style.opacity = "1";
overlay2.style.opacity = "0";

function getRandomIndex() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * images.length);
  } while (newIndex === lastIndex);
  lastIndex = newIndex;
  return newIndex;
}

function changeBackground() {
  const newIndex = getRandomIndex();
  const fadingIn = overlay1.style.opacity === "1" ? overlay2 : overlay1;
  const fadingOut = overlay1.style.opacity === "1" ? overlay1 : overlay2;

  fadingIn.style.backgroundImage = images[newIndex];
  fadingIn.style.opacity = "1";
  fadingOut.style.opacity = "0";
}

setInterval(changeBackground, 10000);
