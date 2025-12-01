function fixImgurLinks() {
    const images = document.querySelectorAll('img[src*="imgur.com"]');
    images.forEach((img) => {
        const newSrc = img.src.replace(/^https?:\/\/(www\.|i\.)?imgur\.com\//, 'https://rimgo.pussthecat.org/');
        if (img.src !== newSrc) {
            img.src = newSrc;
            if (img.srcset) {
                img.srcset = img.srcset.replace(/imgur\.com/g, 'rimgo.pussthecat.org');
            }
        }
    });
    const links = document.querySelectorAll('a[href*="imgur.com"]');
    links.forEach((a) => {
        const newHref = a.href.replace(/^https?:\/\/(www\.|i\.)?imgur\.com\//, 'https://rimgo.pussthecat.org/');
        if (a.href !== newHref) {
            a.href = newHref;
        }
    });
}

fixImgurLinks();
setInterval(fixImgurLinks, 2000);
