document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector('#target-circle');
    const btn = document.querySelector('#start-btn');

    // Configurazione dell'animazione uguale al video
    const tween = KUTE.fromTo(
        target,
        // Stato iniziale (from)
        { 
            svgTransform: { translate: [150, 150], rotate: 45, scale: 1.2 } 
        },
        // Stato finale (to)
        { 
            svgTransform: { translate: [450, 150], rotate: 0, scale: 1.5 },
            // Imposta l'origine della trasformazione per evitare scatti
            transformOrigin: [150, 150] 
        },
        { 
            duration: 1500, 
            easing: 'easingCubicOut' 
        }
    );

    btn.addEventListener('click', () => {
        // Avvia l'animazione
        tween.start();
        
        // Opzionale: disabilita il tasto durante l'esecuzione
        btn.disabled = true;
        btn.style.opacity = "0.5";
    });
});