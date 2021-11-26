$(document).ready(function(){

  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  // $(window).on('scroll load',function(){
  //     $('#menu').removeClass('fa-times');
  //     $('.navbar').removeClass('nav-toggle');

      // if(window.scrollY>60){
      //     document.querySelector('#scroll-top').classList.add('active');
      // }else{
      //     document.querySelector('#scroll-top').classList.remove('active');
      // }

      // scroll spy
      // $('section').each(function(){
      //     let height = $(this).height();
      //     let offset = $(this).offset().top - 200;
      //     let top = $(window).scrollTop();
      //     let id = $(this).attr('id');

      //     if(top>offset && top<offset+height){
      //         $('.navbar ul li a').removeClass('active');
      //         $('.navbar').find(`[href="#${id}"]`).addClass('active');
      //     }
      // });
  });



// Scroll operations

window.addEventListener('scroll' , function() {
  let scrl = document.querySelector(".scroll-top");
  scrl.classList.toggle("active" , window.scrollY > 80 )
});

function scroller() {
  window.scrollTo({
    top : 0,
    behavior : "smooth"
  })
}


  // Typed Effect starts 
  let typed = new Typed(".typing-text", {
    strings: ["Software developer ...!"],
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



  // Scroll Animations
  const scrlAnime = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
  });

  /* SCROLL HOME */
  scrlAnime.reveal('.home .content h3', { delay: 200 });
  scrlAnime.reveal('.home .content p', { delay: 200 });
  scrlAnime.reveal('.home .content .btn', { delay: 200 });

  scrlAnime.reveal('.home .content .socials', { interval: 600 });
  scrlAnime.reveal('.home .content .socials .social-icons .linkedin', { delay: 300 });
  scrlAnime.reveal('.home .content .socials .social-icons .github', { delay: 450 });
  scrlAnime.reveal('.home .content .socials .social-icons .twitter', { delay: 550 });
  scrlAnime.reveal('.home .content .socials .social-icons .instagram', { delay: 650 });
  scrlAnime.reveal('.home .content .socials .social-icons .facebook', { delay: 750 });

  scrlAnime.reveal('.home .image', { delay: 750 });

  /* SCROLL SKILLS */
  scrlAnime.reveal('.skills .content-skills .heading', { delay: 400 });
  scrlAnime.reveal('.skills .content-skills p', { interval: 600 });
  scrlAnime.reveal('.skills .tech-skills', { delay: 400 });
  scrlAnime.reveal('.skills .tech-skills .tech-icon', { interval: 200 });


  /* SCROLL EXPERIENCE */
  scrlAnime.reveal('.experience .heading', { delay: 400 });
  scrlAnime.reveal('.experience .timeline', { delay: 400 });
  scrlAnime.reveal('.experience .timeline .right', { interval: 400 });

  scrlAnime.reveal('.experience .exp-sec-wrapper .image', { delay: 500 });

  /* SCROLL PROJECTS */
  scrlAnime.reveal('.projects .heading', { delay: 400 });
  scrlAnime.reveal('.projects .projects-card-wrapper', { interval: 600 });
  scrlAnime.reveal('.projects .projects-card-wrapper .pr-card-one', { delay: 400 });
  scrlAnime.reveal('.projects .projects-card-wrapper .pr-card-two', { delay: 600 });
  scrlAnime.reveal('.projects .projects-card-wrapper .pr-card-three', { delay: 800 });





  /* SCROLL EDUCATION */
  scrlAnime.reveal('.education .heading', { delay: 400 });
  scrlAnime.reveal('.education .edu-center', { delay: 400 });
  scrlAnime.reveal('.education .edu-center .edu-details', { interval: 500 });


  /* SCROLL FOOTER */
  scrlAnime.reveal('.footer ', { delay: 400 });

