import { Route, Routes, useLocation, } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './modules/Home';
import { QrCollections } from './modules/QrCollections';
import Pricing from './components/Pricing/Pricing';
import Accordion from './components/Accordion/Accordion';
import { FAQS } from './constants/FaqData.constant';
import { Payout } from './modules/Payout';
import { Banking } from './modules/Banking';
import { SignUp } from './modules/SignUp.tsx';
function App() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Header />
        <Routes>
          <Route>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<div>About</div>}  />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<SignUp/>} />
            <Route path="/signup" element={<div>Sign up</div>} />
            {/* <Route path="/products" element={<div>Products</div>} /> */}
            <Route
              path="/products/qr-collections"
              element={<QrCollections />}
            />
            <Route
              path="/products/payout"
              element={<Payout />}
            />
            <Route
              path="/products/banking"
              element={<Banking />}
            />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
        {location.pathname !== "/login" && (
          <>
            <Accordion faqs={FAQS}/>
            <Footer />
          </>
        )}
    </>
  );
}

export default App;
