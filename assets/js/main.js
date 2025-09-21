function setupCarousel(
  carouselSelector,
  prevSelector,
  nextSelector,
  cardWidth
) {
  const carousel = document.querySelector(carouselSelector);
  const prevBtn = document.querySelector(prevSelector);
  const nextBtn = document.querySelector(nextSelector);

  const cards = carousel.querySelectorAll(".news-card");
  const totalCards = cards.length;

  let currentIndex = 0;

  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  prevBtn.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    const scrollPos = Math.min(currentIndex * cardWidth, maxScrollLeft);
    carousel.scrollTo({ left: scrollPos, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = Math.min(currentIndex + 1, totalCards - 1);
    const scrollPos = Math.min(currentIndex * cardWidth, maxScrollLeft);
    carousel.scrollTo({ left: scrollPos, behavior: "smooth" });
  });
}

// Apply to all carousels
setupCarousel(
  ".news-cards-carousel",
  ".carousel-btn.prev",
  ".carousel-btn.next",
  260
);
setupCarousel(
  ".news-cards-carousel2",
  ".carousel-btn2.prev",
  ".carousel-btn2.next",
  260
);
setupCarousel(
  ".news-cards-carousel3",
  ".carousel-btn3.prev",
  ".carousel-btn3.next",
  260
);
setupCarousel(
  ".news-cards-carousel4",
  ".carousel-btn4.prev",
  ".carousel-btn4.next",
  260
);
