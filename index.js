gsap.from("#header-img", {opacity: 0, duration: 3})

const navlinks = document.querySelectorAll("nav a")

navlinks.forEach(link => {
    link.addEventListener("mouseover", () => link.style.transform = "scale(1.1)")
    link.addEventListener("mouseout", () => link.style.transform = "scale(1)")
})