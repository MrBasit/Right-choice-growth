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
    let faqButtons = document.querySelectorAll('.faq-btn');
    let testimonialNext = document.querySelector('.testimonial-next');
    let testimonialPrevious = document.querySelector('.testimonial-previous');

    let faqsOpened;
    
    faqButtons.forEach(e=>{
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
            }
            else{
                if(faqsOpened){
                    faqsOpened.children.item(1).classList.remove('icon-round-light');
                    faqsOpened.classList.remove('active','bg-brand-gradient')

                    faqsOpened.children.item(1).children.item(0).classList.remove('fa-minus');
                    faqsOpened.children.item(1).children.item(0).classList.add('fa-plus');

                    faqsOpened.children.item(1).classList.add('icon-round');


                    e.classList.add('icon-round-light');
                    e.classList.remove('icon-round');

                    e.children.item(0).classList.add('fa-minus');
                    e.children.item(0).classList.remove('fa-plus');

                    e.parentElement.classList.add('active','bg-brand-gradient')


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