import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import './carousel.css';
import NavBar from './navbar.js'
import Article02 from './article02.js'
import Home from './Home.js'
import FindArticles from './find-articles.js'
import AboutUs from './about-us.js'
import community from './community-guidelines.js'

class App extends Component {
  render() {
    
    return (
    <div className="App">

    <NavBar />
    <br></br>
     <Router>
        <Route path='/home' component={Home} />
        <Route path='/article-02' component={Article02} />
        <Route path='/find-articles' component={FindArticles} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/community-guidelines' component={community} />
     </Router> 
  </div>

    );
  }
}

export default App;
