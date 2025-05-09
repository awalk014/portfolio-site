import Home from './pages/Home';
import About from './pages/About';
import CourseDescription from './pages/CourseDescription';
import CourseInfo from './pages/CourseInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Awards from './pages/Awards';
import Evaluation from './pages/Evaluation';
import EducationPlan from './pages/EducationPlan';
import Contact from './pages/Contact';
import CourseWork from './pages/CourseWork';
import './App.css';
import './coursedescription.css';


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
          <Route path="/educationplan" element={<EducationPlan />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coursework" element={<CourseWork />} />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/" state={{ error: true }} replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
