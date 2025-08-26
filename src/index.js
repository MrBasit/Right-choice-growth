import './styles.css';
import { gsap } from "gsap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,ScrollSmoother);

document.addEventListener("DOMContentLoaded",()=>{
    gsap.from('header .main-nav',{
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

    let services = document.querySelectorAll('#Services .service');
    console.log(services)
    let servicesTimeline = gsap.timeline({
        scrollTrigger:
        {trigger:'#Services',
        start:'10% 75%',
        end: '90% 75%',
        scrub:1}
    })
    servicesTimeline.from(services,{
        scale:1.2,
        y:-10,
        x:-10,
        opacity:0,
        stagger:0.5,
        onComplete:()=>{console.log('sroll trigger complete')}
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
                let nextitem = testimonials[(i+1)%testimonials.length];
                gsap.to(e,{
                    opacity:0,
                    scale:0.8,
                    x:-100,
                    duration:0.5,
                    onComplete:()=>{
                        e.classList.remove('active');
                        gsap.set(e, {
                            opacity:1,
                            scale:1,
                            x:0
                        });
                        nextitem.classList.add('active');
                    }
                })
                gsap.from(nextitem,{
                    opacity:0,
                    scale:1.2,
                    x:150,
                    duration:0.5,
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

                gsap.to(e,{
                    opacity:0,
                    scale:0.8,
                    x:100,
                    duration:0.5,
                    onComplete:()=>{
                        e.classList.remove('active');
                        gsap.set(e, {
                            opacity:1,
                            scale:1,
                            x:0
                        });
                        nextitem.classList.add('active');
                    }
                })
                gsap.from(nextitem,{
                    opacity:0,
                    scale:1.2,
                    x:-150,
                    duration:0.5,
                    delay:0.5
                })

                isMovementComplete = true;
            }
        });
    });

    document.querySelectorAll('.main-nav ul li a').forEach(a=>{
        a.addEventListener('click',(e)=>{
            e.preventDefault();
            let sectionId = a.getAttribute('href');
            let section = document.querySelector(sectionId);
            console.log(sectionId,section)
            gsap.to(window,{
                duration:1.5,
                scrollTo:{
                    y:section,
                    offsetY:0
                },
                ease:"power2.out"
            })
        })
    })



    let openMenuBtn = document.querySelector('.sec-nav .open');
    let closeMenuBtn = document.querySelector('.sec-nav .close');
    let mobileMenu = document.querySelector('.sec-nav ul');
    let mobileMenuli = document.querySelectorAll('.sec-nav ul li');
    let mobileMenuLiReverse = Array.from(document.querySelectorAll('.sec-nav ul li')).reverse();

    document.querySelectorAll('.sec-nav ul li a').forEach(a=>{
        a.addEventListener('click',(e)=>{
            e.preventDefault();
            let sectionId = a.getAttribute('href');
            let section = document.querySelector(sectionId);

            openMenuBtn.classList.remove('hidden');
            closeMenuBtn.classList.add('hidden');
            mobileMenu.classList.add('hidden');
            
            gsap.to(window,{
                duration:1.5,
                scrollTo:{
                    y:section,
                    offsetY:0
                },
                ease:"power2.out"
            })
        })
    })

    openMenuBtn.addEventListener('click',()=>{
        openMenuBtn.classList.add('hidden');
        closeMenuBtn.classList.remove('hidden');
        mobileMenu.classList.remove('hidden');
        gsap.to(mobileMenu,{
            height:mobileMenu.scrollHeight,
            duration:0.5,
        });

        gsap.from('.sec-nav ul li',{
            y:-20,
            opacity:0,
            duration:0.4,
            delay:0.25,
            stagger:0.1,
        });

    })

    closeMenuBtn.addEventListener('click',()=>{
        closeMenuBtn.classList.add('hidden');
        openMenuBtn.classList.remove('hidden');
        gsap.to(mobileMenuLiReverse,{
            y:-20,
            opacity:0,
            duration:0.4,
            stagger:0.1,
        });

        gsap.to(mobileMenu,{
            height:0,
            duration:0.5,
            delay:0.4,
            onComplete:()=>{
                mobileMenu.classList.add('hidden');
                gsap.set(mobileMenuli,{opacity:1,y:0})
            }
        });
    })
})