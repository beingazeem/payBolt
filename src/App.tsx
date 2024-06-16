import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './modules/Home';
import './App.css';
import Pricing from './components/Pricing/Pricing';
import Accordion from './components/Accordion/Accordion';
import { FAQS } from './constants/FaqData.constant';
import Products from './components/Products/products';
function App() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <Routes>
          <Route>
            <Route index path="/" element={<Home />} />
            <Route index path="/products" element={<Products/>} />
            <Route index path="/about" element={<div>About</div>} />
            <Route index path="/pricing" element={<Pricing/>} />
            <Route index path="/login" element={<div>Login</div>} />
            <Route index path="/signup" element={<div>Sign up</div>} />
            <Route index path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </main>
      <Accordion faqs={FAQS}/>
      <Footer />
    </>
  );
}

export default App;
