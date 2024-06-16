import { useNavigate } from "react-router-dom";

export interface Props {
  title: {
    first: string;
    second?: string;
  };
  desc: string;
  buttons: {
    first: string;
    second?: string;
  };
  imgSrc: string;
}

export const Hero = ({ buttons, desc, imgSrc, title }: Props) => {

  const nav = useNavigate();
  const Navigate = () =>{
    nav("/login");
  }
  return (
    <section
      id="hero"
      className="w-11/12 md:w-[65%] mx-auto mt-32 flex justify-between items-center flex-col lg:flex-row lg:justify-between gap-20 min-h-[calc(100dvh-8rem)] mb-10"
    >
      <div className="flex flex-col justify-center items-start gap-5">
        <h3 className="text-5xl font-bold">
          <span className="block">{title.first}</span>
          {title.second ? <span className="block">{title.second}</span> : null}
        </h3>
        <p className="text-foreground/70 max-w-xl">{desc}</p>
        <div className="flex gap-x-5 items-center flex-wrap">
          <button className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold hover:bg-foreground hover:text-background" onClick={()=>Navigate()}>
            {buttons.first}
          </button>
          {buttons.second ? (
            <button className="py-2 px-8 mt-5 rounded-full border-foreground/30 transition-colors border font-bold bg-foreground text-background">
              {buttons.second}
            </button>
          ) : null}
        </div>
      </div>
      <img
        alt={title.first}
        src={imgSrc}
        className="w-full max-w-md rounded-md min-h-[50dvh]"
      />
    </section>
  );
};
