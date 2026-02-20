// PhotoSwipe v5 — initialise all .photo-grid elements
// Must run after DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const grids = document.querySelectorAll('.photo-grid');
  if (!grids.length) return;

  import('https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe-lightbox.esm.js')
    .then(({ default: PhotoSwipeLightbox }) => {
      grids.forEach(function (grid) {
        const lightbox = new PhotoSwipeLightbox({
          gallery: '#' + grid.id,
          children: 'a.photo-thumb',
          pswpModule: () => import('https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe.esm.js')
        });
        lightbox.init();
      });
    });
});
