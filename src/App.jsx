import Home from './routes/Home';
import Header from './components/Header';
import Movie from './routes/Movie';
import NotFound from './routes/NotFound';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie' element={<Movie />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/:notFound(.*)' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
