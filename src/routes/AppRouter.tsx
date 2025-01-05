import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';

export const AppRouter = () => {
  return (
    <Router future={{ 
        v7_startTransition: true,
        v7_relativeSplatPath: true, }}>
      <Routes >
        <Route path="/*" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};
