import { useCallback, useState } from 'react';
import './App.css';
import Categories from './components/Categories/Categories';
import NewsList from './components/NewsList/NewsList';

function App() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories />
      <NewsList />
    </>
  );
}

export default App;
