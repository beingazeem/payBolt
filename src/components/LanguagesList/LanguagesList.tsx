import { TranslationsLang } from '../../constants/language.constants';
import { ReactTyped } from 'react-typed';

const LanguagesList = () => {
  return (
    <div className="my-2 px-2 py-4 font-bold flex items-center justify-center gap-x-2 border border-white cardTheme rounded-full">
      <span className="text-5xl font-bold relative text-center -translate-x-14">
        <span>Built for </span>
        <ReactTyped
          strings={TranslationsLang}
          typeSpeed={80}
          backSpeed={80}
          loop
          className="tricolor absolute ml-5"
        />
      </span>
    </div>
  );
};

export default LanguagesList;
