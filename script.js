/* ===================================================== */
/* AGRO FORTE - FUTURO SUSTENTÁVEL */
/* script.js */
/* ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MENU MOBILE
    ========================================== */

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

    /* ==========================================
       FECHAR MENU AO CLICAR EM UM LINK
    ========================================== */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuToggle?.querySelector("i");

            if (icon) {

                icon.classList.add("fa-bars");
                icon.classList.remove("fa-xmark");

            }

        });

    });

    /* ==========================================
       BOTÃO VOLTAR AO TOPO
    ========================================== */

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

    /* ==========================================
       EFEITO NAVBAR AO ROLAR
    ========================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (window.scrollY > 80) {

            navbar.style.padding = "0px";
            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.08)";
            navbar.style.background =
                "rgba(255,255,255,0.98)";

        } else {

            navbar.style.boxShadow =
                "0 2px 20px rgba(0,0,0,0.05)";
            navbar.style.background =
                "rgba(255,255,255,0.95)";

        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".section, .card, .gallery-item"
    );

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach(element => {

        element.classList.add("reveal");
        revealObserver.observe(element);

    });

    /* ==========================================
       SEÇÃO ATIVA NO MENU
    ========================================== */

    const sections = document.querySelectorAll("section");

    function updateActiveMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (
                pageYOffset >= sectionTop - 150
            ) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveMenu);

    updateActiveMenu();

    /* ==========================================
       FORMULÁRIO DE CONTATO
    ========================================== */

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const button =
                form.querySelector("button");

            const originalText =
                button.innerHTML;

            button.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

            button.disabled = true;

            setTimeout(() => {

                alert(
                    "Mensagem enviada com sucesso! Obrigado pelo contato."
                );

                form.reset();

                button.innerHTML =
                    originalText;

                button.disabled = false;

            }, 1800);

        });

    }

    /* ==========================================
       ANIMAÇÃO CONTADOR (CASO FUTURAMENTE
       EXISTAM MÉTRICAS NO SITE)
    ========================================== */

    const counters =
        document.querySelectorAll(".counter");

    const startCounter = (counter) => {

        const target =
            parseInt(counter.dataset.target);

        let count = 0;

        const increment =
            target / 120;

        const updateCounter = () => {

            count += increment;

            if (count < target) {

                counter.innerText =
                    Math.floor(count);

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.innerText =
                    target.toLocaleString("pt-BR");

            }

        };

        updateCounter();

    };

    const counterObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        startCounter(
                            entry.target
                        );

                        counterObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.5
            }

        );

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /* ==========================================
       EFEITO PARALLAX SUAVE NO HERO
    ========================================== */

    const hero =
        document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        const offset =
            window.pageYOffset;

        if (hero) {

            hero.style.backgroundPositionY =
                `${offset * 0.4}px`;

        }

    });

    /* ==========================================
       LAZY ANIMATION PARA IMAGENS
    ========================================== */

    const images =
        document.querySelectorAll("img");

    const imageObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        imageObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.1
            }

        );

    images.forEach(img => {

        img.style.opacity = "0";
        img.style.transform =
            "translateY(20px)";
        img.style.transition =
            "all .8s ease";

        imageObserver.observe(img);

    });

});

/* ===================================================== */
/* FIM DO SCRIPT */
/* ===================================================== */
