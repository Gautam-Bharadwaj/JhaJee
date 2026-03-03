document.addEventListener('DOMContentLoaded', () => {
    const backgroundContainer = document.getElementById('background-container');

    // 1. Initial background setup (Asha Newspaper Design)
    const ashaBgUrl = 'assets/asha_bg.png';
    const paperColor = '#1e1b18';

    // Apply via JS for reliable loading
    backgroundContainer.style.backgroundColor = paperColor;
    backgroundContainer.style.backgroundImage = `url(${ashaBgUrl})`;
    backgroundContainer.style.backgroundSize = 'cover';
    backgroundContainer.style.backgroundPosition = 'center';

    // 2. Interactive Light Effect (Premium Feel)
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = '0';
    overlay.style.background = `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0) 70%)`;
    backgroundContainer.appendChild(overlay);

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        overlay.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 60%)`;
    });

    // 3. Subtle Grain Animation
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.opacity = '0.04'; // Very subtle grain
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    backgroundContainer.appendChild(canvas);

    function createGrain() {
        const idata = ctx.createImageData(canvas.width, canvas.height);
        const buffer = new Uint32Array(idata.data.buffer);
        const len = buffer.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.5) {
                buffer[i] = 0xff000000;
            }
        }
        ctx.putImageData(idata, 0, 0);
    }

    // Animate the grain slightly
    function animateGrain() {
        createGrain();
        setTimeout(() => requestAnimationFrame(animateGrain), 50);
    }

    animateGrain();

    console.log('Asha background initialized.');
});
