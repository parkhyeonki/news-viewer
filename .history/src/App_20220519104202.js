import axios from 'axios';
import { useState } from 'react';
import './App.css';
import NewsList from './components/NewsList/NewsList';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=05f1b59ba99c4b2cb7579cb88e16cfcd',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={onClick}>불러오기</button>
      <NewsList />
    </div>
  );
}

export default App;
