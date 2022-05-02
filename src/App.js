import { Routes, Route } from 'react-router-dom'
import Navbar from './navbar';
import HomePage from './pages/HomePage';

import './App.css';
import RecorderPage from './pages/RecorderPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/record' element={<RecorderPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
