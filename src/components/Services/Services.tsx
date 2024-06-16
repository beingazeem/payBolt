import ServicesConstants from '../../constants/Services.constants';
import React from 'react';

const Services = () => {
  return (
    <>
    {ServicesConstants.map((services, idx) => (
        <section
          key={idx}
          id="hero"
          className="flex items-center justify-center mb-24 mt-10">
          {services.isImageLeft ? (
            <>
            <div className='flex gap-x-60 items-center'>
                <img
                  alt="hero"
                  src={services.img}
                  className="w-full max-w-md order-2 lg:order-1"
                />
                <div className="flex flex-col justify-center items-start gap-5 order-2 lg:order-1">
                  <h3 className="text-5xl font-bold">
                    <span className="block">{services.heading}</span>{' '}
                  </h3>
                  <p className="text-foreground/70 max-w-xl">
                    {services.desc}
                  </p>
                  <div className="flex gap-x-5 items-center flex-wrap">
                    <button className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold hover:bg-foreground hover:text-background">
                      Learn More
                    </button>
                  </div>
                </div>
            </div>
            </>
          ) : (
            <>
              <div className='flex gap-x-60 items-center'>
              <div className="flex flex-col justify-center items-start gap-5 order-2 lg:order-1">
                <h3 className="text-5xl font-bold">
                  <span className="block">{services.heading}</span>{' '}
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
              </div>
            </>
          )}
        </section>
      ))}
    </>
  );
};

export default Services;
