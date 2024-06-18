import { TranslationsLang } from '../../constants/language.constants';
import { ReactTyped } from 'react-typed';

const LanguagesList = () => {
  return (
    <section className="py-6 cardTheme">
      <div className="px-2 font-bold flex items-center justify-center gap-x-2 ">
        <span className="text-5xl font-bold relative text-center -translate-x-14">
          <span>Build for </span>
          <ReactTyped
            strings={TranslationsLang}
            typeSpeed={80}
            backSpeed={80}
            loop
            className="tricolor absolute ml-5"
          />
        </span>
      </div>
    </section>
  );
};

export default LanguagesList;
