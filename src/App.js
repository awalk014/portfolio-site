import Home from './pages/Home';
import About from './pages/About';
import CourseDescription from './pages/CourseDescription';
import CourseInfo from './pages/CourseInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './coursedescription.css';
import Awards from './pages/Awards';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coursedescription" element={<CourseDescription />} />
          <Route path="/courseinfo" element={<CourseInfo />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
