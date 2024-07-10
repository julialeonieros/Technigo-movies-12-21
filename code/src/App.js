import MovieDetails from 'pages/MovieDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList } from './pages/MovieList';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MovieList} />
        <Route path='/:movieID' exact component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
};
