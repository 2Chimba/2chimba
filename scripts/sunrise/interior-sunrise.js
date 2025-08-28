document.addEventListener('DOMContentLoaded', function() {
const scrollTrigger = document.querySelector('.interior-scroll-trigger');
const fadeInBlock = document.querySelector('.interior-comment-container');

function isElementInViewport(el) {
  if (!el) return false; // Добавляем проверку на null

  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', function() {
  if (isElementInViewport(scrollTrigger)) {
    fadeInBlock.classList.add('show');
  }
  else {
      fadeInBlock.classList.remove('show');
    }

});
});
