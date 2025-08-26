document.addEventListener('DOMContentLoaded', function() {
const scrollTrigger = document.querySelector('.scroll-trigger2');
const fadeInBlock = document.querySelector('.zwischen-box');
const top = document.querySelector('.top-container');
const h4mod = document.querySelectorAll('h4');
const logoScroll = document.querySelector('.logo-link');

function isElementInViewport(el) {
  if (!el) return false;

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
    top.classList.add('trig');
    h4mod.forEach(h4 => h4.classList.add('mod'));
    logoScroll.classList.add('anim');
  }
  else {
      fadeInBlock.classList.remove('show');
      top.classList.remove('trig');
      h4mod.forEach(h4 => h4.classList.remove('mod'));
      logoScroll.classList.remove('anim');
    }

});
});
