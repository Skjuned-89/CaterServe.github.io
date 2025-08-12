let menuButton = document.querySelectorAll(".menuButton button")
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
let mediaDrop = document.querySelector(".mediaNav .menuContent .mediaDropDown")
let mediaDropItems = document.querySelector(".mediaNav .menuContent .mediaDropDown .mediaDropItems")
let midStyle=mediaDropItems.style
mediaDrop.addEventListener("click", () => {
    if (midStyle.height=="0px") {
        midStyle.height="200px"
        midStyle.padding="20px 10px"
        midStyle.marginTop="10px"
        midStyle.border="1px solid #9a9a9a"
    }
    else{
        midStyle.height="0px"
        midStyle.padding="0px 0px"
        midStyle.marginTop="0px"
        midStyle.border="0px"
    }
})
let menu=document.querySelector(".menu")
let menuContent=document.querySelector(".mediaNav .menuContent")
menu.addEventListener("click",()=>{
    if (menuContent.style.height=="100%") {
        menuContent.style.height="0px"
    } else {
        menuContent.style.height="100%"
    }
})
