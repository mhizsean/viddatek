import React from 'react';
import './App.css';
import NavBar from './layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';

function App() {
    return (
        <React.Fragment className="App">
            <NavBar/>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
