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
import StoryblokClient from 'storyblok-js-client';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './style/globalTheme';

function App() {

  React.useEffect(() => {
    let Storyblok = new StoryblokClient({
      accessToken: 'C7FcdrBq68Kll8B0p2qTAwtt'
    });

    Storyblok
      .get('cdn/stories', {
        
      })
      .then((stories) => {
        console.log(stories); // an array
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
          <Route exact path='/' component={Home} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
