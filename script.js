let mediaDrop = document.querySelector(".mediaNav .menuContent .mediaDropDown")
let mediaDropItems = document.querySelector(".mediaNav .menuContent .mediaDropDown .mediaDropItems")
let midStyle = mediaDropItems.style
mediaDrop.addEventListener("click", () => {
    if (midStyle.height == "0px") {
        midStyle.height = "200px"
        midStyle.padding = "20px 10px"
        midStyle.marginTop = "10px"
        midStyle.border = "1px solid #9a9a9a"
    }
    else {
        midStyle.height = "0px"
        midStyle.padding = "0px 0px"
        midStyle.marginTop = "0px"
        midStyle.border = "0px"
    }
})
let menuButton = document.querySelectorAll(".menuButton button")
let menu = document.querySelector(".menu")
let menuContent = document.querySelector(".mediaNav .menuContent")
menu.addEventListener("click", () => {
    if (menuContent.style.height == "100%") {
        menuContent.style.height = "0px"
    } else {
        menuContent.style.height = "100%"
    }
})
let menuItems = document.querySelectorAll(".menuItems ul")
menuButton.forEach((button, index) => {
    button.addEventListener("click", () => {
        for (let i = 0; i < 5; i++) {
            if (i == index) {
                menuItems[i].classList.remove("itemActive")
                menuButton[i].classList.add("menuButtonActive")
            }
            else {
                menuButton[i].classList.remove("menuButtonActive")
                menuItems[i].classList.add("itemActive")
            }
        }
    });
})
function checkActive(list) {
    if (list.classList.contains('deactive')) {
        list.classList.remove("deactive")
    }
}
function addActive(card, special) {
    if (special == false) {
        card.classList.add("active")
        card.parentElement.style.justifyContent = "start";
        card.parentElement.style.gap = "20px";
    } else {
        card.classList.add("active")
        card.parentElement.style.justifyContent = "space-between";
        card.parentElement.style.rowGap = "20px";
    }
}
let eventCards=document.querySelectorAll(".eventBottom ul li")
console.log(eventCards)
let eventbtn = document.querySelectorAll(".eventButton button")
console.log(eventbtn)
eventbtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        eventbtn.forEach((allbts) => {
            if (allbts == btn) {
                allbts.classList.remove("colorDeactive")
                allbts.classList.add("colorActive")

            } else {
                allbts.classList.remove("colorActive")
                allbts.classList.add("colorDeactive")
            }
        })
        for (let i = 0; i < 8; i++) {
            if (btn.textContent.trim() == eventCards[i].firstElementChild.firstElementChild.textContent.trim()) {
                checkActive(eventCards[i])
                addActive(eventCards[i], false)
            }
            else if (btn.textContent.trim() == "All Events") {
                checkActive(eventCards[i])
                addActive(eventCards[i], true)
            }
            else {
                eventCards[i].classList.add("deactive")
            }
        }
    })
})
