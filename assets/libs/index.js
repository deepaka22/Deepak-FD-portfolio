$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  // Smooth Scrolling 
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {scrollTop: $($(this).attr("href")).offset().top,},
      500,
      "linear");
  });
});

// Scroll operations

window.addEventListener("scroll", function () {
  let scrl = document.querySelector(".scroll-top");
  scrl.classList.toggle("active", window.scrollY > 80);
});

function scroller() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Typed Effect starts
let typed = new Typed(".typing-text", {
  strings: ["Software developer .......!"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 25,
  backDelay: 500,
});

// Pre Loading
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 1000);
}

window.onload = fadeOut; // Browser will call

function refreshPage(){
  window.location.reload();
} 

// Scroll Animations
const scrlAnime = ScrollReveal({
  origin: "left",
  distance: "50px",
  duration: 1200,
  reset: true,
});

/* SCROLL HOME */
scrlAnime.reveal(".home .content h3", { delay: 200 });
scrlAnime.reveal(".home .content p", { delay: 200 });
scrlAnime.reveal(".home .content .btn", { delay: 200 });

scrlAnime.reveal(".home .content .socials", { interval: 600 });
scrlAnime.reveal(".home .content .socials .social-icons .linkedin", {
  delay: 300,
});
scrlAnime.reveal(".home .content .socials .social-icons .github", {
  delay: 450,
});
scrlAnime.reveal(".home .content .socials .social-icons .twitter", {
  delay: 550,
});
scrlAnime.reveal(".home .content .socials .social-icons .instagram", {
  delay: 650,
});
scrlAnime.reveal(".home .content .socials .social-icons .facebook", {
  delay: 750,
});

scrlAnime.reveal(".home .image", { delay: 750 });

/* SCROLL SKILLS */
scrlAnime.reveal(".skills .content-skills .heading", { delay: 400 });
scrlAnime.reveal(".skills .content-skills p", { interval: 600 });
scrlAnime.reveal(".skills .tech-skills", { delay: 400 });
scrlAnime.reveal(".skills .tech-skills .tech-icon", { interval: 200 });

/* SCROLL EXPERIENCE */
scrlAnime.reveal(".experience .heading", { delay: 400 });
scrlAnime.reveal(".experience .timeline", { delay: 400 });
scrlAnime.reveal(".experience .timeline .right", { interval: 400 });

scrlAnime.reveal(".experience .exp-sec-wrapper .image", { delay: 500 });

/* SCROLL PROJECTS */
scrlAnime.reveal(".projects .heading", { delay: 400 });
scrlAnime.reveal(".projects .projects-card-wrapper", { interval: 600 });
scrlAnime.reveal(".projects .projects-card-wrapper .pr-card-one", {
  delay: 400,
});
scrlAnime.reveal(".projects .projects-card-wrapper .pr-card-two", {
  delay: 600,
});
scrlAnime.reveal(".projects .projects-card-wrapper .pr-card-three", {
  delay: 800,
});

/* SCROLL EDUCATION */
scrlAnime.reveal(".education .heading", { delay: 400 });
scrlAnime.reveal(".education .edu-center", { delay: 400 });
scrlAnime.reveal(".education .edu-center .edu-details", { interval: 500 });

/* SCROLL FOOTER */
scrlAnime.reveal(".footer ", { delay: 400 });
