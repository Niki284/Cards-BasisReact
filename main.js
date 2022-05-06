   
    // gsap.to();
    // gsap.from();
    // gsap.fromTo();
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    const box = document.querySelector('.box--red');
    const boxAnimation = gsap.to('.box', 
          { transformOrigin: '100% 100%',x:20, rotate:90 , background: "green",paused: true },
      ); 

      
    box.addEventListener('click', () => {
      if (boxAnimation.reversed()) {
        boxAnimation.play();
      } else {
          boxAnimation.reverse();
      }
 
    });

    
   
    /*
     const animateCard = gsap.from()   
    */
        
