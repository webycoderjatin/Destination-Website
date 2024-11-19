const line = document.querySelectorAll("#categories .cats .bx")
line.forEach((e) => {
    e.addEventListener("mouseover", () => {
        e.childNodes[1].classList.add("active")
        e.childNodes[5].classList.add("active")
        e.childNodes[3].classList.add("active")
    })

    e.addEventListener("mouseout", () => {
        e.childNodes[1].classList.remove("active")
        e.childNodes[5].classList.remove("active")
        e.childNodes[3].classList.remove("active")


    })

})

function toggle() {
    const slide = document.querySelector("#filters")
    const toggle = document.querySelector(".toggle")
    if (toggle.innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        slide.style.left = "-190px"
        toggle.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'

    } else {
        slide.style.left = "0px"
        slide.style.borderTopLeftRadius = "0px"
        slide.style.borderBottomLeftRadius = "0px"
        toggle.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        toggle()
    }

}