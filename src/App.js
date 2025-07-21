import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Links from './pages/links';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import Navbar from './components/navbar';
import Library from './pages/library';
import Collections from './pages/collections';
import CollectionsData from './data/collections';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Routes>
            < Route path="/" element={<div style={{ display: "flex" }}><><Navbar /><HomePage /><Library /></> </div>} />
            < Route path="/product" element={<Links />} />
            < Route path="/pricing" element={< Links />} />
            < Route path="/blog" element={< Links />} />
            < Route path="/library" element={< Library />} />
            < Route path="/support" element={< Links />} />
            < Route path="/login" element={< Links />} />
            < Route path="/freeTrial" element={< Links />} />
            < Route path="/homepage" element={<HomePage />} />
            < Route path="/collections" element={< Collections />} />
            < Route path="/categories" element={< Links />} />

          </Routes >

        </div >
        <Footer />
      </div >
    </Router>
  );
}
export default App;