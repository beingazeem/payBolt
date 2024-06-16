import { Hero } from '../../components/Hero';
import ScrollingLogos from '../../components/HorizontalScroll/HorizontalAnimation';
import LanguagesList from '../../components/LanguagesList/LanguagesList';
import Services from '../../components/Services/Services';

export const Home = () => {
  return (
    <>
      <Hero />
      <LanguagesList/>
      <Services/>
      <ScrollingLogos/>
    </>
  );
};
