
// Header 
const header = document.getElementById("header")
console.log(header)


//Light / Dark Mode switch
const modeSwitch = document.querySelectorAll(".mode-switch"),
totalmodeSwitch = modeSwitch.length;

for (let i = 0; i < totalmodeSwitch; i++) {
    modeSwitch[i].addEventListener("change", function () {
        if (this.value === "dark") {
            document.body.className = "dark";
            header.classList.add("dark")

        }
        else {
            document.body.className ="";
            header.classList.remove("dark")
        }
    })
}


// OPEN THE SWITCH 

let toggleSwitch = document.querySelector(".toggle-theme-switcher");
let openmodal = document.querySelector(".theme-switch");

toggleSwitch.addEventListener("click" , ()=> {
    openmodal.classList.toggle("open")
})