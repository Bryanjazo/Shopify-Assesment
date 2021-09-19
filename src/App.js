import React from 'react'
import Home from './Components/Home'
import NavBar from './Components/Navbar/Navbar'

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
      <NavBar />
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
