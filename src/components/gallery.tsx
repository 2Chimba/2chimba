import { useState } from "react";

interface IGallery {
  id: number;
  src: string;
  description: string;
}

export const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const images: IGallery[] = [
    {
      id: 1,
      src: "src/media/exterior/1.jpg",
      description: "На фоне стройка",
    },
    {
      id: 2,
      src: "src/media/exterior/2.jpg",
      description: "На фоне самолёт",
    },
    {
      id: 3,
      src: "src/media/exterior/3.jpg",
      description: "Едет в пыли",
    },
    {
      id: 4,
      src: "src/media/exterior/4.jpg",
      description: "Стоит в лесу",
    },
    {
      id: 5,
      src: "src/media/exterior/5.jpg",
      description: "На фоне скалы",
    },
    {
      id: 6,
      src: "src/media/exterior/6.jpg",
      description: "В городе",
    },
    {
      id: 7,
      src: "src/media/exterior/7.jpg",
      description: "В пустыне",
    },
  ];

  const nextImage = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
      setIsAnimating(false);
    }, 300);
  };

  const prevImage = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1,
      );
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        
        .animate-fade-out {
          animation: fadeOut 0.3s ease-in-out forwards;
        }
      `}</style>

      <div className="relative group">
        <div className="w-full aspect-square overflow-hidden rounded-3xl relative">
          <img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].description}
            className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
              isAnimating ? "animate-fade-out" : "animate-fade-in"
            }`}
          />
        </div>

        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 text-white w-12 h-12 rounded-full text-2xl cursor-pointer transition-all duration-300 hover:bg-white/40 hover:scale-110 active:scale-95 flex items-center justify-center backdrop-blur-sm bg-white/20 opacity-0 group-hover:opacity-100"
          onClick={prevImage}
          aria-label="Предыдущее изображение"
          disabled={isAnimating}
        >
          ❮
        </button>

        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 text-white w-12 h-12 rounded-full text-2xl cursor-pointer transition-all duration-300 hover:bg-white/40 hover:scale-110 active:scale-95 flex items-center justify-center backdrop-blur-sm bg-white/20 opacity-0 group-hover:opacity-100"
          onClick={nextImage}
          aria-label="Следующее изображение"
          disabled={isAnimating}
        >
          ❯
        </button>

        <div className="absolute top-4 right-4 opacity-70 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </>
  );
};
