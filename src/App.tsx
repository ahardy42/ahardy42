import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/contact' component={Contact}/>
        <Route path='/projects' component={Projects}/>
        <Route exact path='/' component={Home}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
