import React from 'react';
import './App.css';
import NavBar from './layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Pricing from './component/Pricing';
import Footer from './layout/Footer';
import Contact from './component/Contact';
import About from './component/About';

function App() {
    return (
        <React.Fragment className="App">
            <NavBar/>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
