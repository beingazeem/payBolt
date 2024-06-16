
import ScrollingLogos from "../HorizontalScroll/HorizontalAnimation";
import LanguagesList from "../LanguagesList/LanguagesList";
import Services from "../Services/Services";
export const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="w-11/12 md:w-[65%] mx-auto flex justify-between items-center flex-col lg:flex-row gap-20 min-h-[calc(100dvh-8rem)]">
        <div className="flex flex-col justify-center items-start gap-5">
          <h3 className="text-5xl font-bold">
            <span className="block">Simplifying Payments.</span>{' '}
            <span className="block">Amplifying Success.</span>
          </h3>
          <p className="text-foreground/70 max-w-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex numquam
            tenetur non asperiores magni quam harum reiciendis repudiandae, minus
            in explicabo. Dolorem recusandae possimus non!
          </p>
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
          src="https://bulkpe.in/assets/three_phone.png"
          className="w-full max-w-md"
        />
      </section>
      <LanguagesList/>
      <Services/>
      <ScrollingLogos/>
    </>
  );
};
