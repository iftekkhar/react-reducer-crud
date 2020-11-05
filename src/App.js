import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import { GlobalProvider } from './Components/Context/GlobalState';
import Posts from './Components/Posts/Posts';
import Category from './Components/Category/Category';

function App() {
  return (
    //Context API Global Provider
    <GlobalProvider>
      <div className="App">
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path='/'>
              <Posts></Posts>
            </Route>
            <Route path='/category'>
              <Category></Category>
            </Route>
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
