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

function App() {
  const location = useLocation();
  return (
    <>
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
          <Route path="/products/payout" element={<Payout />} />
          <Route path="/products/banking" element={<Banking />} />
          <Route path="*" element={<div>404</div>} />
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
