//import logo from './logo.svg';
import login from './comp/login';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <login />
        <Switch>
          <Route path="/" exact component ={login}>
          </Route>
        </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
