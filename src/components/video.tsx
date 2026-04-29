export const Video = () => {
  return (
    <section className="flex relative justify-center">
      <video
        className="[clip-path:polygon(0%_0%,100%_0%,100%_90%,0%_100%)]"
        src="src/media/video/footage.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <span className="w-20 max-w-20 md:w-full bg-amber-200 md:max-w-440 px-[10%] flex absolute mt-50 2xl:mt-80 font-extralight text-white text-4xl lg:text-6xl 2xl:text-7xl text-center text-shadow-2xl">
        НЕПРЕРЫВНОЕ УЛУЧШЕНИЕ ЛУЧШЕ, ЧЕМ ОТЛОЖЕННОЕ СОВЕРШЕНСТВО
      </span>
      
    </section>
  );
};
