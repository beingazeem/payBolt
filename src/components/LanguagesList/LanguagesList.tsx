
import { TranslationsLang } from "../../constants/language.constants";
import {ReactTyped} from "react-typed";

const LanguagesList = () => {


  const indianColors = {
    saffron: '#FF9933', // Saffron color
    white: '#FFFFFF',   // White
    green: '#138808',   // Green
    blue: '#0000FF',    // Blue
  };
  
  const applyColorCoding = (word: string): string => {
    if (word.length < 5) return word;
  
    const colorStyles = [
      { color: indianColors.saffron },
      { color: indianColors.white, backgroundColor: 'black' },
      { color: indianColors.green },
      { color: indianColors.blue },
      { color: indianColors.green }
    ];
  
    // Shuffle color styles randomly
    for (let i = colorStyles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colorStyles[i], colorStyles[j]] = [colorStyles[j], colorStyles[i]];
    }
  
    return (
      `<span style="font-weight: bold; font-size: 2rem;">
        ${word.split('').map((char, index) => (
          `<span style="color: ${colorStyles[index % colorStyles.length].color}; background-color: ${colorStyles[index % colorStyles.length].backgroundColor || 'transparent'};">
            ${char}
          </span>`
        )).join('')}
      </span>`
    );
  };

  const languageChangeHandler = () =>{
    const randomIndex = Math.floor(Math.random() * TranslationsLang.length);
    const selectedLanguage = TranslationsLang[randomIndex];
    return selectedLanguage;
  }
  return (
    <div className="mx-2 my-2 px-2 py-2 font-bold flex items-center justify-center gap-x-2">
      <span className="text-5xl font-bold">Built for {" "}
      <ReactTyped 
        strings={[applyColorCoding(languageChangeHandler())]}
        typeSpeed={100}
        loop      
      />
      </span>
      
    </div>
  )
}

export default LanguagesList