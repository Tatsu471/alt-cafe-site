import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Global GSAP defaults for Alt-Café
gsap.defaults({
    duration: 1.2,
    ease: 'power3.out',
});

export { gsap, useGSAP, ScrollTrigger };
