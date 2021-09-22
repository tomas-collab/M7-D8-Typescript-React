import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Detail from './component/Detail';



const App = () =>{

  return (
       <div className="App">
    <Router>
     <Switch>
         <Route  path='/' exact render={(routerProps)=><Home {...routerProps}/>}/>
         <Route  path='/:detail' exact render={(routerProps)=><Detail   {...routerProps}/>}/>
     </Switch>
    </Router>
       </div>
  );
}

export default App;
