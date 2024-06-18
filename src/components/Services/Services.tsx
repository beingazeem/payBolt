import ServicesConstants from '@/constants/Services.constants';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const Services = () => {
  const navigate = useNavigate();

  const handleNavigationToProduct = (route: string) => {
    navigate(route);
  };

  function Section({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          {children}
        </span>
      </section>
    );
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
    <Section>
      {ServicesConstants.map((services, idx) => (
        <motion.section
          key={idx}
          id="hero"
          className="flex items-center mx-auto justify-between"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {services.isImageLeft ? (
            <div className="flex w-full justify-between items-center  flex-col lg:flex-row cardTheme min-h-[500px] px-40 py-10 lg:py-0">
              <motion.img
                alt="hero"
                src={services.img}
                className="w-full min-w-[300px] mt-5 max-w-md order-2 lg:order-1"
                variants={imageVariants}
              />
              <div className="flex flex-col justify-center items-start gap-5 order-2 lg:order-1">
                <motion.h3
                  className="text-5xl font-bold flex flex-col justify-center items-center lg:justify-start w-full"
                  variants={textVariants}
                >
                  <span className="block w-full text-center lg:text-start">
                    {services.heading}
                  </span>
                </motion.h3>
                <motion.p
                  className="text-foreground/70 max-w-xl text-center lg:text-start w-full"
                  variants={textVariants}
                >
                  {services.desc}
                </motion.p>
                <div className="flex gap-x-5 items-center flex-wrap justify-center lg:justify-start w-full">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <button
                      className="py-2 px-8 mt-5 lg:mt-0 rounded-full border-foreground/30 transition-colors border font-bold hover:bg-foreground hover:text-background"
                      onClick={() => handleNavigationToProduct(services.path)}
                    >
                      Learn More
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex w-full justify-between items-center gap-20 flex-col lg:flex-row cardTheme min-h-[500px] px-40 py-10 lg:py-0">
              <div className="flex flex-col justify-center items-start gap-5 order-2 lg:order-1">
                <motion.h3
                  className="text-5xl font-bold w-full"
                  variants={textVariants}
                >
                  <span className="block text-center lg:text-start w-full">
                    {services.heading}
                  </span>
                </motion.h3>
                <motion.p
                  className="text-foreground/70 lg:max-w-xl text-center lg:text-start w-full"
                  variants={textVariants}
                >
                  {services.desc}
                </motion.p>
                <div className="flex gap-x-5 items-center justify-center lg:justify-start flex-wrap w-full">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <button
                      className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold hover:bg-foreground hover:text-background"
                      onClick={() => handleNavigationToProduct(services.path)}
                    >
                      Learn More
                    </button>
                  </motion.div>
                </div>
              </div>
              <motion.img
                alt="hero"
                src={services.img}
                className="w-full mt-5 lg:mt-0 min-w-[300px] max-w-md order-1 lg:order-1"
                variants={imageVariants}
              />
            </div>
          )}
        </motion.section>
      ))}
    </Section>
  );
};

export default Services;
