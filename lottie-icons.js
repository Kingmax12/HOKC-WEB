const footerLottieIcons = [
    { id: 'instagram-icon', path: 'icons8-instagram-50.json', link: '#', label: 'Instagram' },
    { id: 'whatsapp-icon', path: 'icons8-whatsapp-50.json', link: 'https://chat.whatsapp.com/KzaujqfWLEI8kYsVvCbSWv?mode=gi_t', label: 'WhatsApp' },
    { id: 'tiktok-icon', path: 'icons8-tiktok-50.json', link: '#', label: 'TikTok' }
];

function initFooterLottie() {
    if (!window.lottie) return;

    footerLottieIcons.forEach(icon => {
        const container = document.getElementById(icon.id);
        if (!container) return;

        lottie.loadAnimation({
            container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: icon.path,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet'
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initFooterLottie);
