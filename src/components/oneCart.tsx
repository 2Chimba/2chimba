import { motion } from "motion/react";

interface ICart {
  photo: string;
  text: string;
  style: string;
  delay: number;
}

export const Cart = ({photo,text,style,delay}:ICart) => {
  return (
    <motion.div 
      className="flex flex-col w-80 h-auto rounded-2xl overflow-hidden border border-gray-400 hover:scale-102 hover:shadow-xl transition-all duration-300"
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 0.5, delay: delay}}
    >
      <img className={`w-full h-100 ${style}`} src={photo} />
      <span className="p-4 hyphens-auto text-justify">
        {text}
      </span>
    </motion.div>
  );
};
