import MovieDetails from 'pages/MovieDetails';
import MovieList from 'pages/MovieList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieList />} exact />
        <Route path='/:movieID' element={<MovieDetails />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
