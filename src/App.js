import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import FilmView from "./views/FilmView";
import HomeView from "./views/HomeView";
// import { Link } from "react-router-dom";
import routes from "./routes";
import SearchFilms from "./views/SearchFilms";

function App() {
  return (
    <div className="pt-5">
      {/* <Link to="/">Home</Link>
      <Link to="/film">Film</Link> */}
      <Switch>
        <Route exact component={HomeView} path={routes.home} />
        <Route exact component={FilmView} path={routes.film + "/:id"} />
        <Route exact component={SearchFilms} path={routes.search} />
      </Switch>
    </div>
  );
}

export default App;
