import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './About/About';
import Contact from './contact/contact';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer'; // Uncomment when ready
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add 404 page later with: <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;