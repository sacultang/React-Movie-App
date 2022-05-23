import Home from './routes/Home';
import Header from './components/Header';
import Movie from './routes/Movie';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie' element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
