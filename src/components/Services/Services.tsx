import ServicesConstants from '@/constants/Services.constants';

const Services = () => {
  return (
    <>
      {ServicesConstants.map((services, idx) => (
        <section
          key={idx}
          id="hero"
          className="flex items-center justify-center mb-24 mt-10 w-11/12 md:w-[65%] mx-auto"
        >
          {services.isImageLeft ? (
            <div className="flex w-full justify-between items-center gap-20 flex-col lg:flex-row">
              <img
                alt="hero"
                src={services.img}
                className="w-full max-w-md order-2 lg:order-1"
              />
              <div className="flex flex-col justify-center items-start gap-5 order-2 lg:order-1">
                <h3 className="text-5xl font-bold flex flex-col justify-center items-center lg:justify-start w-full">
                  <span className="block w-full text-center lg:text-start">
                    {services.heading}
                  </span>{' '}
                </h3>
                <p className="text-foreground/70 max-w-xl text-center lg:text-start w-full">
                  {services.desc}
                </p>
                <div className="flex gap-x-5 items-center flex-wrap justify-center lg:justify-start w-full">
                  <button className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold hover:bg-foreground hover:text-background">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex w-full justify-between items-center gap-20 flex-col lg:flex-row">
              <div className="flex flex-col justify-center items-start gap-5 order-2 lg:order-1">
                <h3 className="text-5xl font-bold w-full">
                  <span className="block text-center lg:text-start w-full">
                    {services.heading}
                  </span>{' '}
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
                className="w-full max-w-md order-1 lg:order-1"
              />
            </div>
          )}
        </section>
      ))}
    </>
  );
};

export default Services;
