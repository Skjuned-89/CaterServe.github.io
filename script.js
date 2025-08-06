let menuButton=document.querySelectorAll(".menuButton button")
let menuItems=document.querySelectorAll(".menuItems ul")
menuButton.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            if (i==index) {
                menuItems[i].classList.remove("itemActive")
                menuButton[i].classList.add("menuButtonActive")
            }
            else{
                menuButton[i].classList.remove("menuButtonActive")
                menuItems[i].classList.add("itemActive")

            }
        }
    });
})
