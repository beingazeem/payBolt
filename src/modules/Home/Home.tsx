import { Hero } from '@/components/Hero';
import ScrollingLogos from '@/components/HorizontalScroll/HorizontalAnimation';
import LanguagesList from '@/components/LanguagesList/LanguagesList';
import Services from '@/components/Services/Services';
import { HomeConstants } from '@/constants/home.constant';

export const Home = () => {
  return (
    <>
      <Hero {...HomeConstants} />
      <LanguagesList />
      <Services />
      <ScrollingLogos />
    </>
  );
};
