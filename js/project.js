  const gallery = document.getElementById('gallery');
  const items = Array.from(gallery.children);
  const totalItems = items.length;

  // Dupliquer les éléments pour simuler un scroll infini
  items.forEach(item => {
    const clone = item.cloneNode(true);
    gallery.appendChild(clone);
  });

  let scrollTimeout;

  gallery.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const maxScroll = gallery.scrollWidth / 2;
      if (gallery.scrollLeft >= maxScroll) {
        gallery.scrollLeft = gallery.scrollLeft - maxScroll;
      } else if (gallery.scrollLeft < 1) {
        gallery.scrollLeft = gallery.scrollLeft + maxScroll;
      }
    }, 40);
  });