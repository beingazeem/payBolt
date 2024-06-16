<<<<<<< HEAD

import { TranslationsLang } from "../../constants/language.constants";
import {ReactTyped} from "react-typed";
=======
import { TranslationsLang } from '@/constants/language.constants';
import { ReactTyped } from 'react-typed';

>>>>>>> master
const LanguagesList = () => {
  return (
<<<<<<< HEAD
    <div className="mx-2 my-2 px-2 py-2 font-bold flex items-center justify-center gap-x-2 border-b-2 ">
      <span className="text-5xl font-bold">Built for {" "}
      <ReactTyped 
        strings={[applyColorCoding(languageChangeHandler())]}
        typeSpeed={50}
        loop      
      />
=======
    <div className="my-2 px-2 py-10 font-bold flex items-center justify-center gap-x-2 border-y border-y-foreground/20 bg-foreground/5">
      <span className="text-5xl font-bold relative text-center -translate-x-14">
        <span>Built for </span>
        <ReactTyped
          strings={TranslationsLang}
          typeSpeed={80}
          backSpeed={80}
          loop
          className="tricolor absolute ml-5"
        />
>>>>>>> master
      </span>
    </div>
  );
};

export default LanguagesList;
