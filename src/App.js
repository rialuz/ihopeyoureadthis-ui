import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { getLetters } from './utils/apiHelper';

function App() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    getLetters(setLetters);
  }, [])

  return (
    <div className="App">
      <Header />
      <MainContent letters={letters} setLetters={setLetters} />
      <Footer />
    </div>
  );
}

export default App;
