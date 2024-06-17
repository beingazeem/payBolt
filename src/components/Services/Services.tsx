import ServicesConstants from '@/constants/Services.constants';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleNavigationToProduct = (route: string)=>{
    navigate(route);
  }
  return (
    <>
      {ServicesConstants.map((services, idx) => (
        <section
          key={idx}
          id="hero"
          className="flex items-center justify-between mb-24 mt-10"
        >
          {services.isImageLeft ? (
            <div className="flex w-full justify-between  items-center gap-40 flex-col lg:flex-row cardTheme h-[500px] px-20 ">
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
                  <button className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold hover:bg-foreground hover:text-background" onClick={()=>handleNavigationToProduct(services.path)}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex w-full justify-between items-center gap-20 flex-col lg:flex-row cardTheme h-[500px] px-20">
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
                  <button className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold hover:bg-foreground hover:text-background" onClick={()=>handleNavigationToProduct(services.path)}>
                    Learn More
                  </button>
                  <button className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold bg-foreground text-background" onClick={()=>handleNavigationToProduct('/login')}>
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
