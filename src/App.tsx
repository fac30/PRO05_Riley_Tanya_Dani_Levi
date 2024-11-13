import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import Signup from './pages/Signup';
import Create from './pages/Create';
import Recipes from './pages/Recipes';
import Footer from './components/Footer/Footer';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </div>
    
  );
}