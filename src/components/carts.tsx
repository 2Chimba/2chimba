import { motion } from "motion/react";
import { Cart } from "./oneCart";

export const Carts = () => {
  return (
    <section className="flex flex-col items-center w-full mb-10">
      <motion.span
        className="text-6xl text-center my-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ЗОВ ПРИКЛЮЧЕНИЙ
      </motion.span>
      <section className="flex flex-row justify-between w-full max-w-380 px-[10%]">
        <Cart
          photo={"src/media/adventures/Adv1.jpg"}
          text={
            "Выбраться из городской суеты и увидеть своими глазами всю красоту природы. Отвлечься от серого города, увидив дивные краски этого могучего мира"
          }
          style="[clip-path:polygon(0%_0%,100%_0%,100%_95%,0%_100%)]"
          delay={0.6}
        />
        <Cart
          photo={"src/media/adventures/adv2.jpg"}
          text={
            "Проехать с комфортом там, куда остальные не могут даже добраться? Легко! Произведение инженерной мысли под вашим контролем доедет куда угодно"
          }
          style="[clip-path:polygon(0%_0%,100%_0%,100%_95%,50%_100%,0%_95%)]"
          delay={0}
        />
        <Cart
          photo={"src/media/adventures/adv3.jpg"}
          text={
            "Сложная дорога не станет преградой между Вами и её Величеством природой. Land Cruiser проедет сквозь непогоду и любую дорогу"
          }
          style="[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_95%)]"
          delay={1.2}
        />
      </section>
    </section>
  );
};
