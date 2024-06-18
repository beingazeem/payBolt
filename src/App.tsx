import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './modules/Home';
import { QrCollections } from './modules/QrCollections';
import Pricing from './components/Pricing/Pricing';
import Accordion from './components/Accordion/Accordion';
import { FAQS } from './constants/FaqData.constant';
import { Payout } from './modules/Payout';
import { Banking } from './modules/Banking';
import { SignUp } from './modules/SignUp';
import { Login } from './modules/Login';
import { HAS_NO_FOOTER } from './constants/common.constant';
import { NotFound } from './modules/NotFound';
import { motion, useScroll, useSpring } from 'framer-motion';
import { DynamicQrCollections } from './modules/DynamicQrCollections';
import { MoneyTransfer } from './modules/MoneyTransfer';
import { PosService } from './modules/PosService';
import TermAndCondition from './modules/TnC/TermAndCondition';
import PrivacyPolicy from './modules/PrivacyAndPolicy/Privacy&Policy';
import { ContactUs } from './modules/ContactUs';
function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <Routes>
        <Route>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/products" element={<div>Products</div>} /> */}
          <Route path="/products/qr-collections" element={<QrCollections />} />
          <Route path="/products/payout-services" element={<Payout />} />
          <Route path="/products/instant-banking" element={<Banking />} />
          <Route
            path="/products/dynamic-collections"
            element={<DynamicQrCollections />}
          />
          <Route path="/products/money-transfer" element={<MoneyTransfer />} />
          <Route path="/products/pos-services" element={<PosService />} />
          <Route path="/t&c" element={<TermAndCondition />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {!HAS_NO_FOOTER.includes(location.pathname) && (
        <>
          <Accordion faqs={FAQS} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
