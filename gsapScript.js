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
        trigger: ".aboutUsSection",
        scroller: "body",
        start: "top 40%"
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
        start: "top 130%"
    }
});
// let counterRun = false;
// function counter() {
//     if (counterRun) return;
//     counterRun = true;
//     let arr = [689, 107, 253];
//     for (let i = 1; i <= 3; i++) {
//         let a = arr[i - 1];
//         let count = 0;
//         let label = document.getElementsByClassName(`counter${i}`)[0];
//         let interval = setInterval(() => {
//             if (count <= a) {

//                 label.innerText = count;
//                 count++;
//             } else {
//                 clearInterval(interval);
//             }
//         }, 1);
//     }
// }
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".aboutDetailedCard .detailedCard", {
//     y:10,
//     scrollTrigger: {
//         trigger: ".aboutDetailedCard .detailedCard",
//         start: "top 10%",
//         markers: true,
//         onEnter: () => {
//             counter();
//         }
//     }
// });
let counterRun = false;

function counter() {
    if (counterRun) return;
    counterRun = true;

    let arr = [689, 107, 253];
    let duration = 2000; // total animation time (ms)

    for (let i = 1; i <= 3; i++) {
        let target = arr[i - 1];
        let label = document.getElementsByClassName(`counter${i}`)[0];

        let count = 0;
        let stepTime = Math.max(Math.floor(duration / target), 1); // ms delay per increment

        let interval = setInterval(() => {
            if (count < target) {
                count++;
                label.innerText = count;
            } else {
                clearInterval(interval);
            }
        }, stepTime);
    }
}

gsap.registerPlugin(ScrollTrigger);

gsap.from(".aboutDetailedCard .detailedCard", {
    y: 10,
    opacity: 0,
    scrollTrigger: {
        trigger: ".aboutDetailedCard .detailedCard",
        start: "23% 100%",
        onEnter: counter
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
            start: "top 150%",
        }
    });
});
gsap.from(".serviceTop", {
    y: 500,
    duration: 1.5,
    opacity: 0,
    stagger: .2,
    ease: "elastic.out(1,.75)",
    scrollTrigger: {
        trigger: ".serviceTop",
        scroller: "body",
        start: "top 140%",
    }
})
let menuCards = document.querySelectorAll(".menuItems .starter li")
let menuBtn = document.querySelectorAll(".menuButton button")
let menuItms = document.querySelectorAll(".menuItems ul")
menuBtn.forEach((button, index) => {
    let mnCard;
    button.addEventListener("click", () => {
        for (let i = 0; i < 5; i++) {
            if (i == index) {
                mnCard = menuItms[i].children
                let arr = [];
                Array.from(mnCard).forEach(element => {
                    arr.push(element)
                });
                arr.forEach((value, index) => {
                    gsap.from(value, {
                        y: 500,
                        duration: 1.5,
                        opacity: 0,
                        delay: index * 0.1,
                        ease: "elastic.out(1,.75)",
                        scrollTrigger: {
                            trigger: value,
                            scroller: "body",
                            start: "top 100%"
                        }
                    })
                })
            }
        }
    });
})
let strater = document.querySelectorAll(".menuItems .starter li")
strater.forEach((value, index) => {
    gsap.from(value, {
        y: 500,
        duration: 1.5,
        opacity: 0,
        delay: index * 0.1,
        ease: "elastic.out(1,.75)",
        scrollTrigger: {
            trigger: value,
            scroller: "body",
            start: "top 200%"
        }
    })
})
let eventCards = document.querySelectorAll(".eventImage li")
eventCards.forEach((card, index) => {
    gsap.from(card, {
        y: 500,
        duration: 1.5,
        opacity: 0,
        delay: index * 0.1,
        ease: "elastic.out(1,.75)",
        scrollTrigger: {
            trigger: card,
            scroller: "body",
            start: "top 200%"
        }
    })
})
gsap.from(".eventTop,.eventButton", {
    y: 500,
    duration: 1.5,
    opacity: 0,
    stagger: 0.3,
    ease: "elastic.out(1,.75)",
    scrollTrigger: {
        trigger: ".eventButton",
        scroller: "body",
        start: "top 210%"
    }
})
gsap.from(".menuTop,.menuButton", {
    y: 500,
    duration: 1.5,
    opacity: 0,
    stagger: 0.3,
    ease: "elastic.out(1,.75)",
    scrollTrigger: {
        trigger: ".menuButton",
        scroller: "body",
        start: "top 210%"
    }
})
gsap.from(".bookUsSection .container", {
    y: 500,
    duration: 1.5,
    opacity: 0,
    ease: "elastic.out(1,.75)",
    scrollTrigger: {
        trigger: ".bookUsSection .container",
        scroller: "body",
        start: "top 150%"
    }
})
gsap.from(".teamHeader", {
    y: 500,
    duration: 1.5,
    opacity: 0,
    ease: "elastic.out(1,.75)",
    scrollTrigger: {
        trigger: ".teamHeader",
        scroller: "body",
        start: "top 150%"
    }
})
let teamCard = document.querySelectorAll(".ourTeamSection .buttomCards ul li")
teamCard.forEach((card, index) => {
    gsap.from(card, {
        y: 500,
        duration: 1.5,
        opacity: 0,
        delay: index * 0.1,
        ease: "elastic.out(1,.75)",
        scrollTrigger: {
            trigger: card,
            scroller: "body",
            start: "top 150%"
        }
    })
})
// let testimonialTop=docu
gsap.from(".testimonialTop", {
    y: 500,
    duration: 1.5,
    opacity: 0,
    ease: "elastic.out(1,.75)",
    scrollTrigger: {
        trigger: ".testimonialTop",
        scroller: "body",
        start: "top 150%"
    }
})
let swip = document.querySelectorAll(".swiper")
console.log(swip)
swip.forEach((card, index) => {
    gsap.from(card, {
        y: 500,
        duration: 1.5,
        opacity: 0,
        delay: index * 0.1,
        ease: "elastic.out(1,.75)",
        scrollTrigger: {
            trigger: card,
            scroller: "body",
            start: "top 160%"
        }
    })
})
gsap.from(".blogTop", {
    y: 500,
    duration: 1.5,
    opacity: 0,
    ease: "elastic.out(1,.75)",
    scrollTrigger: {
        trigger: ".blogTop",
        scroller: "body",
        start: "top 150%"
    }
})
let blogCont = document.querySelectorAll(".blogCont")
blogCont.forEach((card, index) => {
    gsap.from(card, {
        y: 500,
        duration: 1.5,
        opacity: 0,
        delay: index * 0.1,
        ease: "elastic.out(1,.75)",
        scrollTrigger: {
            trigger: card,
            scroller: "body",
            start: "top 160%"
        }
    })
})
gsap.from(".footerTop", {
    y: 500,
    duration: 1.5,
    opacity: 0,
    ease: "elastic.out(1,.75)",
    scrollTrigger: {
        trigger: ".footerTop",
        scroller: "body",
        start: "top 150%"
    }
})
