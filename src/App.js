
import './App.css';
import Homescreen from './homescreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Login from './loginsystem/loginscreen';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Homescreen />

          </Route>
          <Route exact path="/login">
            <Login />

          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
