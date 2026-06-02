/* ===================================================== */
/* AGRO FORTE - SCRIPT PREMIUM */
/* ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===================================================== */
    /* MENU MOBILE */
    /* ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }

        });

    }

    /* Fechar menu ao clicar em link */
    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuToggle?.querySelector("i");

            if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-xmark");
            }

        });

    });

    /* ===================================================== */
    /* BOTÃO VOLTAR AO TOPO */
    /* ===================================================== */

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /* ===================================================== */
    /* NAVBAR DINÂMICA NO SCROLL */
    /* ===================================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.1)";
            navbar.style.background = "rgba(255,255,255,.98)";
        } else {
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.06)";
            navbar.style.background = "rgba(255,255,255,.9)";
        }

    });

    /* ===================================================== */
    /* SCROLL SUAVE + MENU ATIVO */
    /* ===================================================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");

    function setActiveMenu() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop;
            const height = section.clientHeight;

            if (window.scrollY >= top - 200) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", setActiveMenu);

    /* ===================================================== */
    /* SCROLL REVEAL (INTERSECTION OBSERVER) */
    /* ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section, .card, .gallery-item, .stat-box"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => {

        el.classList.add("reveal");
        observer.observe(el);

    });

    /* ===================================================== */
    /* CONTADOR ANIMADO (ESTATÍSTICAS) */
    /* ===================================================== */

    const counters = document.querySelectorAll(".counter");

    function animateCounter(counter) {

        const target = +counter.getAttribute("data-target");
        let count = 0;

        const speed = target / 120;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target.toLocaleString("pt-BR");

            }

        };

        update();

    }

    const counterObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.6
    });

    counters.forEach(counter => counterObserver.observe(counter));

    /* ===================================================== */
    /* EFEITO PARALLAX LEVE NO HERO */
    /* ===================================================== */

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        if (hero) {

            let offset = window.scrollY;

            hero.style.backgroundPositionY = offset * 0.4 + "px";

        }

    });

    /* ===================================================== */
    /* ANIMAÇÃO DE ENTRADA GLOBAL */
    /* ===================================================== */

    window.addEventListener("load", () => {

        document.body.classList.add("loaded");

    });

});
