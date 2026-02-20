// assets/js/gallery.js
import PhotoSwipeLightbox from '/assets/js/photoswipe/photoswipe-lightbox.esm.js';

document.addEventListener('DOMContentLoaded', function () {
  const grids = document.querySelectorAll('.photo-grid');
  if (!grids.length) return;

  grids.forEach(function (grid) {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#' + grid.id,
      children: 'a.photo-thumb',
      pswpModule: () => import('/assets/js/photoswipe/photoswipe.esm.js')
    });
    lightbox.init();
  });
});
