import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Serializacion from './pages/modules/Serialization';
import Trazabilidad from './pages/modules/Trazabilidad';
import DPP from './pages/modules/DPP';
import ESG from './pages/modules/ESG';
import Compliance from './pages/modules/Compliance';
import Reporting from './pages/modules/Reporting';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules/serialization" element={<Serializacion />} />
            <Route path="/modules/traceability" element={<Trazabilidad />} />
            <Route path="/modules/dpp" element={<DPP />} />
            <Route path="/modules/esg" element={<ESG />} />
            <Route path="/modules/compliance" element={<Compliance />} />
            <Route path="/modules/reporting" element={<Reporting />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;