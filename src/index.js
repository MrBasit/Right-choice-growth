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
    gsap.from('header nav',{
        y:-30,
        duration:0.9
    })
    gsap.from('.header-content h1',{
        y:-20,
        opacity:0,
        duration:0.3,
        delay:0
    })
    gsap.from('.header-content p',{
        y:-20,
        opacity:0,
        duration:0.3,
        delay:0.3
    })
    gsap.from('.header-content a',{
        y:-20,
        opacity:0,
        duration:0.3,
        delay:0.6
    })
    gsap.from('.header-content img',{
        scale:0.7,
        duration:0.9,
        delay:0
    })

    document.querySelectorAll('.btn-primary, .btn-primary-light').forEach(btn=>{
        btn.addEventListener('mouseenter',()=>{
            gsap.to(btn,{scale:1.1, duration:0.3});
        });
        btn.addEventListener('mouseleave',()=>{
            gsap.to(btn,{scale:1, duration:0.3});
        });
    })

    document.querySelectorAll('#Videos > div > div').forEach(vid=>{
        vid.addEventListener('mouseenter',()=>{
            gsap.to(vid,{scale:0.9, duration:0.3});
        });
        vid.addEventListener('mouseleave',()=>{
            gsap.to(vid,{scale:1, duration:0.3});
        });
        vid.addEventListener('click',()=>{
            let popup = document.querySelector('#VideoPopup');
            const iframe = document.getElementById("ytFrame");

            popup.classList.remove('hidden');
            popup.classList.add('flex');
            iframe.src = 'https://www.youtube.com/embed/'+vid.dataset.video;
            console.log(document.querySelector('#VideoPopup > div'));
            gsap.fromTo(
                document.querySelector('#VideoPopup > div'),
                {scale:0.1, opacity:0.1},
                {scale:1, opacity:1,duration:0.3}
            );

        })
    })

    let closeVid = document.querySelector('#VideoPopup button');
    closeVid.addEventListener('click',()=>{
        document.getElementById("ytFrame").src='';
        console.log(document.querySelector('#VideoPopup > div'));
        gsap.fromTo(
            document.querySelector('#VideoPopup > div'),
            {scale:1, opacity:1},
            {scale:0.1, opacity:0.1,duration:0.3}
        );
        setTimeout(()=>{
            closeVid.parentElement.parentElement.classList.remove('flex');
            closeVid.parentElement.parentElement.classList.add('hidden');
        },290)

    })

    document.querySelectorAll('.service').forEach(e=>{
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
                
                gsap.to(e,{
                    opacity:0,
                    duration:1
                })
                setTimeout(() => {
                    e.classList.remove('active');
                    nextitem.classList.add('active');
                    gsap.set(e,{opacity:100});
                }, 1000);
                gsap.from(nextitem,{
                    opacity:0,
                    duration:5,
                    delay:0.5
                })
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