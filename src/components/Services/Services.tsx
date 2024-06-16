import { cn } from '@shared/utils';
import { ServicesConstants } from '@/constants/Services.constants';

const Services = () => {
  return (
    <div className="mx-2 my-2 px-2 py-2 flex flex-col gap-20">
      {ServicesConstants.map((services, idx) => (
        <section
          key={idx}
          id="hero"
          className="w-11/12 md:w-[65%] mx-auto flex flex-col lg:flex-row gap-20 my-20 lg:justify-between"
        >
          {services.isImageLeft ? (
            <>
              <img
                alt="hero"
                src={services.img}
                className="w-full max-w-md order-1 lg:order-1"
              />
              <div className="flex flex-col justify-center items-start gap-5 order-2 lg:order-1">
                <h3 className="text-5xl font-bold w-full">
                  <span
                    className={cn('block text-center', {
                      'lg:text-end': services.isImageLeft,
                    })}
                  >
                    {services.heading}
                  </span>{' '}
                  <span
                    className={cn('block text-center', {
                      'lg:text-end': services.isImageLeft,
                    })}
                  >
                    Amplifying Success.
                  </span>
                </h3>
                <p
                  className={cn(
                    'text-foreground/70 max-w-xl w-full text-center',
                    {
                      'lg:text-end': services.isImageLeft,
                    },
                  )}
                >
                  {services.desc}
                </p>
                <div className="flex gap-x-5 items-center flex-wrap justify-center lg:justify-end w-full">
                  <button className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold hover:bg-foreground hover:text-background">
                    Learn More
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center items-start gap-5 order-2 lg:order-1">
                <h3 className="text-5xl font-bold w-full">
                  <span className="block w-full text-center lg:text-start">
                    {services.heading}
                  </span>{' '}
                  <span className="block w-full text-center lg:text-start">
                    Amplifying Success.
                  </span>
                </h3>
                <p className="text-foreground/70 lg:max-w-xl text-center lg:text-start w-full">
                  {services.desc}
                </p>
                <div className="flex gap-x-5 items-center justify-center lg:justify-start flex-wrap w-full">
                  <button className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold hover:bg-foreground hover:text-background">
                    Learn More
                  </button>
                  <button className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold bg-foreground text-background">
                    Get Started
                  </button>
                </div>
              </div>
              <img
                alt="hero"
                src={services.img}
                className="w-full max-w-md order-2 lg:order-1"
              />
            </>
          )}
        </section>
      ))}
    </div>
  );
};

export default Services;
