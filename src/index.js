import './styles.css';
import { gsap } from "gsap";
import "@fortawesome/fontawesome-free/css/all.min.css";

// // Simple animation test
// gsap.to("h1", { 
//   duration: 5, 
//   y: 50, 
//   opacity: 0.5, 
//   ease: "power2.inOut" 
// });

document.addEventListener("DOMContentLoaded",()=>{

    let services = document.querySelectorAll('.service');
    services.forEach(e=>{
        e.addEventListener("mouseenter", () => {
            gsap.to(e, { scale: 1.1, duration: 0.3, ease: "power1.out" });
            gsap.to(e, { "--color-service-bg-200": "#F3800C","--color-service-bg-300": "#8D4A07", duration: 0.3, ease: "power1.out" });
            console.log(e.children)
            gsap.to(e.children[0], { "--color-service-icon-bg-200": "white","--color-service-icon-bg-300": "white", "--color-service-icon":"#8D4A07", duration: 0.3, ease: "power1.out" });

        });
        e.addEventListener("mouseleave", () => {
            gsap.to(e, { scale: 1, duration: 0.3, ease: "power1.out" });
            gsap.to(e, { "--color-service-bg-200": "#ffffff","--color-service-bg-300": "#ffffff", duration: 0.3, ease: "power1.out" });
            gsap.to(e.children[0], { "--color-service-icon-bg-200": "#F3800C","--color-service-icon-bg-300": "#8D4A07","--color-service-icon":"white", duration: 0.3, ease: "power1.out" });
        });

    })
    


    let faqButtons = document.querySelectorAll('.faq-btn');
    let testimonialNext = document.querySelector('.testimonial-next');
    let testimonialPrevious = document.querySelector('.testimonial-previous');

    let faqsOpened;
    
    faqButtons.forEach((e,i)=>{
        if(i>0) gsap.set(e.parentElement.children[0].children[1],{height:0, marginTop:0, marginBottom:0});
        e.addEventListener('click',()=>{

            faqButtons.forEach(e=>{
                if(e.parentElement.classList.contains('bg-brand-gradient')){
                    faqsOpened =  e.parentElement;
                }
            })

            if(e.classList.contains('icon-round-light')){
                //just need to remove background and change the button color
                e.classList.remove('icon-round-light');
                e.classList.add('icon-round');

                e.children.item(0).classList.remove('fa-minus');
                e.children.item(0).classList.add('fa-plus');

                e.parentElement.classList.remove('active','bg-brand-gradient')

                let p = e.parentElement.children[0].children[1];
                gsap.to(p,
                    {
                        height:0,
                        marginTop:0,
                        marginBottom:0,
                        duration: 0.3,
                        ease: "power2.inOut"
                    }
                );
            }
            else{
                if(faqsOpened){
                    faqsOpened.children.item(1).classList.remove('icon-round-light');
                    faqsOpened.classList.remove('active','bg-brand-gradient')
                    gsap.to(faqsOpened.children[0].children[1],
                        {
                            height:0,
                            marginTop:0,
                            marginBottom:0,
                            duration: 0.3,
                            ease: "power2.inOut"
                        }
                    );

                    faqsOpened.children.item(1).children.item(0).classList.remove('fa-minus');
                    faqsOpened.children.item(1).children.item(0).classList.add('fa-plus');

                    faqsOpened.children.item(1).classList.add('icon-round');


                    e.classList.add('icon-round-light');
                    e.classList.remove('icon-round');

                    e.children.item(0).classList.add('fa-minus');
                    e.children.item(0).classList.remove('fa-plus');

                    e.parentElement.classList.add('active','bg-brand-gradient')

                    gsap.to(e.parentElement.children[0].children[1],
                        {
                            height:e.parentElement.children[0].children[1].scrollHeight,
                            marginTop:"16px",
                            marginBottom:"16px",
                            duration: 0.3,
                            ease: "power2.inOut"
                        }
                    );

                    faqsOpened = null;
                }
                else{
                    e.classList.add('icon-round-light');
                    e.classList.remove('icon-round');

                    e.children.item(0).classList.add('fa-minus');
                    e.children.item(0).classList.remove('fa-plus');

                    e.parentElement.classList.add('active','bg-brand-gradient')

                }
            }
        })
    })

    testimonialNext.addEventListener('click',()=>{
        let testimonials = document.querySelectorAll('.testimonial');
        let isMovementComplete = false;
        testimonials.forEach((e,i)=>{
            if(e.classList.contains('active') && !isMovementComplete){
                let nextitem = testimonials.item(i+1 == testimonials.length ? 0 : i+1);
                e.classList.remove('active');
                nextitem.classList.add('active');
                isMovementComplete = true;
            }
        });
    });

    testimonialPrevious.addEventListener('click',()=>{
        let testimonials = document.querySelectorAll('.testimonial');
        let isMovementComplete = false;
        testimonials.forEach((e,i)=>{
            if(e.classList.contains('active') && !isMovementComplete){
                let nextitem = testimonials.item(i == 0 ? testimonials.length-1 : i-1);
                e.classList.remove('active');
                nextitem.classList.add('active');
                isMovementComplete = true;
            }
        });
    });
})