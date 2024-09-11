import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import './styles/tailwind.css';

const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

function App() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
           <Route
          path="/dashboard"
          render={() => (isAuthenticated() ? <Dashboard /> : <Redirect to="/login" />)}
        />
        </Switch>
      </Router>
    );
  }

export default App;
