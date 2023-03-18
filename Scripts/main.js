const mobileNav = document.getElementById("mobile-nav");
const navIcon = document.getElementById("nav-icon");
const navIconX = document.getElementById("x-icon");



navIcon.addEventListener("click", ()=>{
    mobileNav.classList.remove("active");
    navIcon.classList.add("active");
    navIconX.classList.remove("active");
});

navIconX.addEventListener("click", ()=>{
    mobileNav.classList.add("active");
    navIconX.classList.add("active");
    navIcon.classList.remove("active");
    
});