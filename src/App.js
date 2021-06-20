import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Transactions from './Components/Transactions';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewTransaction from './Components/NewTransaction';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/transactions">
            <Transactions />
          </Route>
          <Route exact path="/transactions/new">
            <NewTransaction />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
