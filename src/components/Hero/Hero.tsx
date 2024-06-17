import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@shared/utils';

export interface Props {
  title: {
    first: string;
    second?: string;
  };
  desc: string;
  buttons: {
    first: {
      text: string;
      href: string;
    };
  };
  imgSrc: string;
  className?: string;
}

export const Hero = ({ buttons, desc, imgSrc, title, className }: Props) => {
  const nav = useNavigate();

  const NavigateToLogin = (route: string)=>{
    nav(route)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6,
        duration: 0.6,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.9,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="hero"
      className={cn(
        ' mt-24 flex justify-between items-center flex-col lg:flex-row lg:justify-between gap-20 min-h-[calc(100dvh-8rem)] mb-10 cardTheme',
        className,
      )}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col justify-center items-start gap-5 mx-24"
        variants={textVariants}
      >
        <h3 className=" text-6xl font-extrabold">
          <span className="block">{title.first}</span>
          {title.second ? <span className="block">{title.second}</span> : null}
        </h3>
        <p className="text-foreground/70 max-w-xl">{desc}</p>
        <div className="flex gap-x-5 items-center flex-wrap">
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <button
              onClick={() => NavigateToLogin(buttons.first.href)}
              className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold bg-foreground text-background"
            >
              {buttons.first.text}
            </button>
        </motion.div>
        </div>
      </motion.div>
      <motion.img
        alt={title.first}
        src={imgSrc}
        className="w-full max-w-md rounded-md min-h-[50dvh]"
        variants={imageVariants}
      />
    </motion.section>
  );
};
