export const Video = () => {
  return (
    <section className="flex relative">
      <video
        className="[clip-path:polygon(0%_0%,100%_0%,100%_90%,0%_100%)]"
        src="src/media/video/footage.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <span className="w-full max-w-440 px-[10%] flex absolute mt-50 font-extralight text-white text-6xl text-center text-shadow-2xl">
        НЕПРЕРЫВНОЕ УЛУЧШЕНИЕ ЛУЧШЕ, ЧЕМ ОТЛОЖЕННОЕ СОВЕРШЕНСТВО
      </span>
      
    </section>
  );
};
