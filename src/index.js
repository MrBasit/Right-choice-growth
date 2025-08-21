import './styles.css';

import { gsap } from "gsap";

// Simple animation test
gsap.to("h1", { 
  duration: 5, 
  y: 50, 
  opacity: 0.5, 
  ease: "power2.inOut" 
});