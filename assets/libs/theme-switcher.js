// LIGHT <-> DARK FN

const modeSwitch = document.querySelectorAll(".mode-switch"),
totalmodeSwitch = modeSwitch.length;

for (let i = 0; i < totalmodeSwitch; i++) {
    modeSwitch[i].addEventListener("change", function () {
        if (this.value === "dark") {
            document.body.className = "dark";
        }
        else {
            document.body.className ="";
        }
    })
}


// OPENING THE SWITCH TOGGLE

let toggleSwitch = document.querySelector(".toggle-theme-switcher");
let openmodal = document.querySelector(".theme-switch");

toggleSwitch.addEventListener("click" , ()=> {
    openmodal.classList.toggle("open")
})