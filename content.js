(function() {
    const path = window.location.pathname;
    if (path.match(/\.(jpg|jpeg|png|gif|webp|mp4|webm)$/i)) {
        return;
    }
    function unwrapImage() {
        const rimgoImage = document.querySelector('img.object-contain');
        if (rimgoImage) {
            let directLink = rimgoImage.src;
            if (directLink.startsWith('/')) {
                directLink = window.location.origin + directLink;
            }
            if (directLink.startsWith('http')) {
                window.location.replace(directLink);
                return;
            }
        }
        const allImages = document.querySelectorAll('img[src*="/"]');
        let contentImages = [];
        
        allImages.forEach((img) => {
            if (!img.src.includes('logo') && !img.src.includes('avatar') && !img.src.includes('icon')) {
                contentImages.push(img);
            }
        });
        if (contentImages.length === 1) {
            window.location.replace(contentImages[0].src);
        }
    }
    unwrapImage();    
    setTimeout(unwrapImage, 100);
    setTimeout(unwrapImage, 500);
})();
