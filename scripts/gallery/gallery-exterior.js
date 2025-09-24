document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.gallery__image');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  let currentIndex = 0;

  function showImage(index) {
    // Скрываем все изображения
    images.forEach(image => image.classList.remove('active'));

    // Показываем изображение с указанным индексом
    images[index].classList.add('active');
  }

  function goToPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function goToNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  // Обработчики событий для кнопок
  prevButton.addEventListener('click', goToPrev);
  nextButton.addEventListener('click', goToNext);

  // Показываем первое изображение при загрузке страницы
  showImage(currentIndex);
});
