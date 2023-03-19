const mobileNav = document.getElementById("mobile-nav");
const navIcon = document.getElementById("nav-icon");
const navIconX = document.getElementById("x-icon");
const mobileA = document.querySelectorAll(".mobile-nav-list");



navIcon.addEventListener("click", ShowMobileNav);

navIconX.addEventListener("click", removeMobileNav);

mobileA.forEach((mobileATag) => {
    mobileATag.addEventListener("click", removeMobileNav)
});

function ShowMobileNav() {
    mobileNav.classList.remove("active");
    navIcon.classList.add("active");
    navIconX.classList.remove("active");
}

function removeMobileNav() {
    mobileNav.classList.add("active");
    navIconX.classList.add("active");
    navIcon.classList.remove("active");
}


