import React from 'react'
import Home from './Components/Home'
import Header from './Components/Header/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
      <Header />
       <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>

  );
}

export default App;
