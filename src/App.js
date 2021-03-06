import React, {useState,useEffect} from 'react'
import Home from './Components/Home'
import NavBar from './Components/Navbar/Navbar'
import {useDispatch,useSelector} from 'react-redux'
import Search from './Components/Search/Search'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AutoFixOffSharp } from '@mui/icons-material';
import {getMarsRoverDetails} from './Redux/nasaReducer'
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";
import * as ReactBootStrap from 'react-bootstrap'
function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
`;
  const loadingFunction = async() =>{
    try {
      setLoading(true)
      const data = await dispatch(getMarsRoverDetails())
  
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadingFunction()
  }, [])
  return (
  <Router>

    <div className="App">
    
      <NavBar />
     
       <Switch>
       <Route path="/Search">
        <Search />
       </Route>
          <Route path="/">
        {loading === false ? <Home /> : <GridLoader css={override} color={'#6854fc'} loading={loading} size={50} />}
          </Route>
        </Switch>
    </div>
    </Router>

  );
}

export default App;
