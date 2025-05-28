document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.screen');
    const navLinks = document.querySelectorAll('[data-target]'); // Todos los elementos que navegan
    const bottomNavItems = document.querySelectorAll('.bottom-nav .nav-item');

    function showScreen(screenId) {
        let targetScreen = null;
        screens.forEach(screen => {
            if (screen.id === screenId) {
                screen.classList.add('active');
                targetScreen = screen;
            } else {
                screen.classList.remove('active');
            }
        });

        // Actualizar estado activo de la navegación inferior
        if (targetScreen && targetScreen.querySelector('.bottom-nav')) {
            bottomNavItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-target') === screenId) {
                    item.classList.add('active');
                }
            });
        }
        // Scroll al inicio de la nueva pantalla
        const appContent = document.getElementById('app-content');
        if (appContent) appContent.scrollTop = 0;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir comportamiento por defecto si es un <a>
            const targetScreenId = link.getAttribute('data-target');
            if (targetScreenId) {
                showScreen(targetScreenId);
            }
        });
    });

    // Mostrar la pantalla de onboarding inicial
    // (Ya se hace con la clase 'active' en el HTML, pero podría ser manejado aquí)
    // showScreen('onboarding-1'); // O 'home' si se omite onboarding
});

// Pequeñas interacciones (ejemplo para Jägger Cam 'like')
document.querySelectorAll('.gallery-item .fa-heart').forEach(heart => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('active'); // 'active' podría ser una clase para el corazón relleno
        heart.classList.toggle('fas'); // Cambia de far (outline) a fas (solid)
        heart.classList.toggle('far');
    });
});