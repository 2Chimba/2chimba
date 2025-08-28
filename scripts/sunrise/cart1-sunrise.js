document.addEventListener('DOMContentLoaded', function() {
  const scrollTriggers = document.querySelectorAll('.scroll-trigger-carts');
  const fadeInBlocks = document.querySelectorAll('.adventures-cart');

  if (!scrollTriggers || !fadeInBlocks || scrollTriggers.length === 0 || fadeInBlocks.length === 0) {
    console.warn("Не найдены элементы .scroll-trigger-carts или .adventures-cart");
    return;
  }

  if (scrollTriggers.length !== fadeInBlocks.length) {
    console.warn("Количество .scroll-trigger-carts не совпадает с количеством .adventures-cart. Обработка только совпадающих пар.");
  }

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

  function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }


  function handleScrollForAll() {
    const numberOfElementsToProcess = Math.min(scrollTriggers.length, fadeInBlocks.length);

    for (let i = 0; i < numberOfElementsToProcess; i++) {
      const trigger = scrollTriggers[i];
      const block = fadeInBlocks[i];
      
      if (trigger && block) {
        if (isElementInViewport(trigger)) {
          block.classList.add('show');
        } else {
          block.classList.remove('show');
        }
      }
    }
  }
  const debouncedScrollHandler = debounce(handleScrollForAll, 300);
  window.addEventListener('scroll', debouncedScrollHandler);
});
