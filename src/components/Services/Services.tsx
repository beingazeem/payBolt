import { ServicesConstants } from '../../constants/Services.constants';
const Services = () => {
  return (
    <div className="mx-2 my-2 px-2 py-2">
      {ServicesConstants.map((services, idx) => (
        <section
          key={idx}
          id="hero"
          className="w-11/12 md:w-[65%] mx-auto flex flex-col lg:flex-row gap-20 min-h-[calc(100vh-8rem)]"
        >
          {services.isImageLeft ? (
            <>
              <img
                alt="hero"
                src={services.img}
                className="w-full max-w-md order-1 lg:order-1"
              />
              <div className="flex flex-col justify-center items-start gap-5 order-2 lg:order-1">
                <h3 className="text-5xl font-bold">
                  <span className="block">{services.heading}</span>{' '}
                  <span className="block">Amplifying Success.</span>
                </h3>
                <p className="text-foreground/70 max-w-xl">{services.desc}</p>
                <div className="flex gap-x-5 items-center flex-wrap">
                  <button className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold hover:bg-foreground hover:text-background">
                    Learn More
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center items-start gap-5 order-2 lg:order-1">
                <h3 className="text-5xl font-bold">
                  <span className="block">{services.heading}</span>{' '}
                  <span className="block">Amplifying Success.</span>
                </h3>
                <p className="text-foreground/70 max-w-xl">{services.desc}</p>
                <div className="flex gap-x-5 items-center flex-wrap">
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
