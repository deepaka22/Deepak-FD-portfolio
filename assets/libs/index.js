// <!-- typed js effect starts -->
let typed = new Typed(".typing-text", {
  strings: ["Software developer ...!"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->

// pre loader start
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 1000);
}

window.onload = fadeOut; // Browser will call
// pre loader end

