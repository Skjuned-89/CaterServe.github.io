gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();
let mm = gsap.matchMedia();
tl.from(".heroContent h3,.heroContent h1", {
    duration: 1.5,
    y: -500,
    opacity: 0,
    ease: "elastic.out(1,.75)"
});
let counterRun = false;
function counter() {
    if (counterRun) return;
    counterRun = true;
    let arr = [689, 107, 253];
    let duration = 2000;
    for (let i = 1; i <= 3; i++) {
        let target = arr[i - 1];
        let label = document.getElementsByClassName(`counter${i}`)[0];
        let count = 0;
        let stepTime = Math.max(Math.floor(duration / target), 1);
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
function detailcardAnimate(startValue) {
    gsap.from(".aboutDetailedCards .detailedCard", {
        y: 500,
        stagger: .3,
        opacity: 0,
        scrollTrigger: {
            trigger: ".aboutDetailedCards .detailedCard",
            start: startValue,
            onEnter: counter
        }
    });
}
mm.add("(max-width: 576px)", () => detailcardAnimate("-50% 100%"));
mm.add("(min-width: 577px) and (max-width: 1024px)", () => detailcardAnimate("-80% 100%"));
mm.add("(min-width: 1025px)", () => detailcardAnimate("-100% 100%"));
function animation(animatePlace, yValue, xValue, durationValue, triggerValue, startValue, scroll, stagger, scale) {
    let animate = {
        x: xValue,
        y: yValue,
        duration: durationValue,
        opacity: 0,
        ease: "elastic.out(1,.75)"
    }
    if (stagger) {
        animate.stagger = 0.2;
    }
    if (scale) {
        animate.scale = 0;
    }
    if (scroll) {
        animate.scrollTrigger = {
            trigger: triggerValue,
            scroller: "body",
            start: startValue,
        }
    }
    gsap.from(animatePlace, animate);
}
animation(".heroSection .container img", null, null, 3, null, null, false, false, true)
animation(".herobtn", null, -500, 1.5, null, null, false, false, false)
animation("header", null, null, 2, null, null, false, false, false)
animation(".aboutImage,.aboutContent", 500, null, 1.5, ".aboutUsSection", "top 40%", true, true, false)
animation(".playAbout", 500, null, 1.5, ".playAbout", "top 130%", true, true, false)
animation(".bookUsSection .container", 500, null, 1.5, ".bookUsSection .container", "top 150%", true, false, false)
animation(".teamHeader", 500, null, 1.5, ".teamHeader", "top 150%", true, false, false)
animation(".testimonialTop", 500, null, 1.5, ".testimonialTop", "top 150%", true, false, false)
animation(".serviceTop", 500, null, 1.5, ".serviceTop", "top 140%", true, false, false)
animation(".blogTop", 500, null, 1.5, ".blogTop", "top 150%", true, false, false)
animation(".footerTop", 500, null, 1.5, ".footerTop", "top 150%", true, false, false)
animation(".menuTop,.menuButton", 500, null, 1.5, ".menuButton", "top 210%", true, true, false)
animation(".eventTop,.eventButton", 500, null, 1.5, ".eventButton", "top 210%", true, true, false)
animation(".mainTop", -500, null, 1.5, ".maintop", "top 100%", true, false, false)

function animateForEach(animateCard,startValue){
    let cards = document.querySelectorAll(animateCard);
    cards.forEach((card,index)=>{
        gsap.from(card, {
            y: 500,
            duration: 1.5,
            opacity: 0,
            delay: index * 0.1,
            ease: "elastic.out(1,.75)",
            scrollTrigger: {
                trigger: card,
                scroller: "body",
                start: startValue
            }
        });
    })
}
animateForEach(".menuItems .starter li","top 200%")
animateForEach(".ourTeamSection .buttomCards ul li","top 150%")
animateForEach(".swiper","top 160%")
animateForEach(".blogCont","top 160%")
animateForEach(".serviceCard li","top 150%")
mm.add("(min-width:1025px)",()=>{
    animateForEach(".eventImage li","top 200%")
})
mm.add("(max-width:1024px)",()=>{
    animation(".eventImage",500,null,1.5,".eventImage","top 160%",true,false,false)
})

let menuItms = document.querySelectorAll(".menuItems ul")
let menuBtn = document.querySelectorAll(".menuButton button")
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
