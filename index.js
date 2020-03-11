
const navlinks = document.querySelectorAll("nav a")

navlinks.forEach(link => {
    link.addEventListener("mouseover", () => link.style.transform = "scale(1.1)")
    link.addEventListener("mouseout", () => link.style.transform = "scale(1)")
})

let tl = gsap.timeline()

tl.from("#header-img", {opacity: 0, duration: 2})

const name = document.querySelectorAll("#name span")
name.forEach(letter => {
    tl.from(letter, {opacity: 0, duration:0.5, y:-30})
})