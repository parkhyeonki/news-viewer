import { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewPage from './pages/NewPage';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <Routes>
      <Route path="/" element={<NewPage />} />
      <Route path="/:category" element={<NewPage />} />
    </Routes>
  );
}

export default App;
