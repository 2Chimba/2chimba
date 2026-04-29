import { motion } from "motion/react";

export const Interrior = () => {
  return (
    <section className="flex flex-col mt-40 w-full">
      <motion.span
        className="text-6xl text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        БРУТАЛЬНОСТЬ
      </motion.span>
      <img
        className="mt-20 w-full h-auto object-cover [clip-path:polygon(0%_0%,100%_8%,100%_100%,0%_100%)]"
        src="src\media\interior\all.jpg"
      />
      <span className="bg-black h-30 w-full flex -my-px justify-center items-center">
        <motion.span
        className="flex w-full  text-white text-6xl justify-center items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        КОМФОРТ
      </motion.span>
      </span>
      <img
        className="w-full h-auto object-cover [clip-path:polygon(0%_0%,100%_0%,100%_92%,0%_100%)]"
        src="src\media\interior\saloon1.jpg"
      />
    </section>
  );
};
