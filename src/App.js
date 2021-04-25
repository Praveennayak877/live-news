import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StateDataTable from './component/StateDataTable';


function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
        <Route exact path="/live-news" component={Home} />
      <Route exact path="/StateDataTable" component={StateDataTable} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
