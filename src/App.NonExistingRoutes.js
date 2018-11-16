import React, { Component } from 'react';
import {
  Route,
  Link,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact Page</h2>
  </div>
)

class App extends Component {
  render() {
    return (
       <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route render={() => (<div> Sorry, this page does not exist. </div>)} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;