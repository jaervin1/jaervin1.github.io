document.addEventListener('DOMContentLoaded', () => {
  // Clicking an artifact image opens the source file in a new tab by default.
  // Add data-download="true" to force browser download behavior instead.
  document.querySelectorAll('.artifact-screenshot').forEach((img) => {
    img.style.cursor = 'pointer';

    img.addEventListener('click', () => {
      const href = img.getAttribute('data-file') || img.getAttribute('src');
      if (!href) return;

      if (img.getAttribute('data-download') === 'true') {
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      }

      window.open(href, '_blank', 'noopener,noreferrer');
    });
  });
});
