(function() {
    const path = window.location.pathname;
    if (path.match(/\.(jpg|jpeg|png|gif|webp|mp4|webm)$/i)) {
        return;
    }
    const images = document.querySelectorAll('img[src*="/"]');
    let contentImages = [];
    images.forEach((img) => {
        if (img.width > 50 && img.height > 50 && !img.src.includes('logo')) {
            contentImages.push(img);
        }
    });
    if (contentImages.length === 1) {
        const directLink = contentImages[0].src;
        if (directLink.startsWith('http')) {
            window.location.replace(directLink);
        }
    }
})();
