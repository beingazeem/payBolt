import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './modules/Home';
import { QrCollections } from './modules/QrCollections';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <Routes>
          <Route>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/signup" element={<div>Sign up</div>} />
            <Route path="/products" element={<div>Products</div>} />
            <Route
              path="/products/qr-collections"
              element={<QrCollections />}
            />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
