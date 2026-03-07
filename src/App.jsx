import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashBoardPage from './pages/DashBoard/DashBoardPage';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
