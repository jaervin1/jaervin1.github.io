document.addEventListener('DOMContentLoaded', () => {
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn    = document.getElementById('lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  // Any artifact-screenshot image (including those inside clip wrappers)
  document.querySelectorAll('.artifact-screenshot').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  // Close on backdrop click
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Close button
  closeBtn.addEventListener('click', closeLightbox);

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
});
