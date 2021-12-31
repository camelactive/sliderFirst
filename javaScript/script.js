let slider_pic = document.querySelector(".slider_pic")
let next = document.querySelector(".next")
let previus = document.querySelector(".previus")
let offset = 0;
let slider_line = document.querySelector(".slider_line");


function slideUp() {
    if (offset < 0) {
        offcet = 0
        offset = offset + 320
        slider_pic.style.top = offset + "px"
        console.log(offset)
    }
}

next.addEventListener("click", slideUp)

function slideDown() {
    if (offset <= 0 && offset > -1280) {
        offcet = 0
        offset = offset - 320
        slider_pic.style.top = offset + "px"
        console.log(offset)
    }
}


previus.addEventListener("click", slideDown)
let slider_section = document.querySelector(".slider_section")

function changeColor() {
    slider_section.style.backgroundColor = "SteelBlue"
}
next.addEventListener("mouseenter", changeColor)
previus.addEventListener("mouseenter", changeColor)


function changeColor2() {
    slider_section.style.backgroundColor = "Teal"
}
next.addEventListener("mouseout", changeColor2)
previus.addEventListener("mouseout", changeColor2)