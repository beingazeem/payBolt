import { Hero } from '@/components/Hero';
import {
  POSDevicesConstant,
  posBenefits,
  posFeatures,
} from '@/constants/common.constant';
import { Link } from 'react-router-dom';

export const PosService = () => {
  return (
    <>
      <Hero {...POSDevicesConstant} className="lg:mt-10" />
      <section className="cardTheme">
        <div className="w-11/12 md:w-[65%] mx-auto py-20">
          <div className="text-3xl text-center mb-10 uppercase flex justify-center ">
            <h4 className="w-fit px-16 py-2 bg-foreground/10 -skew-x-6 border-r-primary border-r">
              <span className="skew-x-6 inline-block">Features</span>
            </h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 place-items-center mb-20">
            {posFeatures.map(feature => (
              <div
                key={feature.heading}
                className="w-full flex flex-col justify-between mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1"
              >
                <div className="flex items-center border-b border-gray-300 text-gray-500">
                  <h3 className="block text-2xl font-semibold text-center w-full pb-5 ">
                    {feature.heading}
                  </h3>
                </div>
                <p className="text-background/60 py-6">{feature.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to={'/login'}
            className="flex justify-center items-center bg-primary rounded-xl py-5 px-4 text-center text-white text-xl mx-auto w-[50%]"
          >
            <span>Get Started</span>
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
              alt="arrow-right"
            />
          </Link>
        </div>
      </section>
      <section className="cardTheme">
        <div className="w-11/12 md:w-[65%] mx-auto py-20">
          <div className="text-3xl text-center mb-10 uppercase flex justify-center">
            <h4 className="w-fit px-16 py-2 bg-foreground/10 -skew-x-6 border-r-primary border-r">
              <span className="skew-x-6 inline-block">Benefits</span>
            </h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 place-items-center">
            {posBenefits.map(benefit => (
              <div
                key={benefit.desc}
                className="w-full flex flex-col justify-between mt-8 p-8 order-2 shadow-xl rounded-3xl  sm:w-96 lg:w-full lg:order-1"
              >
                <div className="flex items-center border-b border-gray-300 text-gray-500">
                  <h3 className="block text-2xl font-medium text-center w-full pb-5 text-primary">
                    {benefit.heading}
                  </h3>
                </div>
                <p className="text-foreground text-xl py-6">{benefit.desc}</p>
                {/* <Link
                  to={benefit.href}
                  className="flex justify-center items-center bg-primary rounded-xl py-5 px-4 text-center text-white text-xl"
                >
                  <span>Know More</span>
                  <img
                    src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                    className="ml-2"
                    alt="arrow-right"
                  />
                </Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
