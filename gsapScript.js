// Register ScrollTrigger plugin first
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from(".heroContent h3,.heroContent h1", {
    duration: 1.5,
    y: -500,
    opacity: 0,
    ease: "elastic.out(1,.75)"
});

gsap.from(".herobtn", {
    duration: 1.5,
    x: -500,
    opacity: 0,
    ease: "elastic.out(1,.75)"
});

gsap.from(".heroSection .container img", {
    duration: 3,
    scale: 0,
    opacity: 0,
    ease: "elastic.out(1,.75)"
});

gsap.from("header", {
    duration: 1.5,
    opacity: 0
});

gsap.from(".aboutImage,.aboutContent", {
    y: 500,
    duration: 1.5,
    stagger: 0.3,
    opacity: 0,
    ease: "elastic.out(1,.75)",
    scrollTrigger: {
        trigger: ".aboutImage",
        scroller: "body",
        start: "top 120%",
        markers:true
    }
});

gsap.from(".playAbout", {
    y: 500,
    duration: 1.5,
    opacity: 0,
    ease: "elastic.out(1,.75)",
    scrollTrigger: {
        trigger: ".playAbout",
        scroller: "body",
        start: "top 130%"
    }
});

gsap.from(".aboutDetailedCards .detailedCard", {
    y: 500,
    duration: 1.5,
    opacity: 0,
    stagger: 0.2,
    ease: "elastic.out(1,.75)",
    scrollTrigger: {
        trigger: ".aboutDetailedCards .detailedCard",
        scroller: "body",
        start: "top 120%"
    }
});
let serviceCards = document.querySelectorAll(".serviceCard li");
serviceCards.forEach((card, index) => {
    gsap.from(card, {
        y: 500,
        duration: 1.5,
        opacity: 0,
        delay: index * 0.1,
        ease: "elastic.out(1,.75)",
        scrollTrigger: {
            trigger: card,
            scroller: "body",
            start: "top 120%"
        }
    });
});
