document.addEventListener("DOMContentLoaded", () => {

/* ================= MENU MOBILE ================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle?.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

/* ================= BOTÃO TOPO ================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
if(window.scrollY > 500){
backToTop.classList.add("show");
}else{
backToTop.classList.remove("show");
}
});

backToTop?.addEventListener("click", () => {
window.scrollTo({top:0, behavior:"smooth"});
});

/* ================= SCROLL MENU ATIVO ================= */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(sec => {
if(window.scrollY >= sec.offsetTop - 200){
current = sec.id;
}
});

links.forEach(link => {
link.classList.remove("active");
if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}
});

});

/* ================= ANIMAÇÃO ENTRADA ================= */

const elements = document.querySelectorAll(".card, .section, .gallery-item");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}
});
},{threshold:0.1});

elements.forEach(el => {
el.style.opacity = 0;
el.style.transform = "translateY(30px)";
el.style.transition = "0.6s";
observer.observe(el);
});

});
