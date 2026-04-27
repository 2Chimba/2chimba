import { motion } from "motion/react";
import { ImageGallery } from "./gallery";

export const Opening = () => {
  return (
    <section className="flex flex-col mt-40 ">
      <motion.span 
        className="text-6xl text-center"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 0.5 }}
      >
        ВРЕМЯ ПОКОРЯТЬ<br /> НОВЫЕ ВЕРШИНЫ
      </motion.span>
      <div className="grid grid-cols-2 gap-5 mt-20">
        <ImageGallery />
        <span className="text-2xl text-justify hyphens-auto">
          Land Cruiser 80 – это вневременная классика, отличающаяся брутальным и
          узнаваемым дизайном. Его угловатые формы, массивная решетка радиатора
          и простая оптика подчеркивают надежность и готовность к любым
          приключениям. Этот автомобиль излучает уверенность и демонстрирует
          свою легендарную проходимость даже в статике. Практичный. Легендарный.
        </span>
      </div>
    </section>
  );
};
