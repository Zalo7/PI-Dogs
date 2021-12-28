import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import CreateDog from './components/CreateDog'
import Home from './components/Home';
import Detail from './components/Detail';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
    <Route exact path= '/' component= {LandingPage} />
    <Route exact path = '/breed' component={CreateDog} />
    <Route exact path= '/home' component= {Home} />
    <Route exact path="/detail/:id" component={Detail} />
    <Route exact path="/aboutme" component={AboutMe} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
