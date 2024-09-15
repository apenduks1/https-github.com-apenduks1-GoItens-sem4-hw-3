const img = document.querySelectorAll(".img");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.add('.loaded')
      observer.unobserve()    
    }
  });
});

img.forEach(i => {
    observer.observe(i  )
}, )