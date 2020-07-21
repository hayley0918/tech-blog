import React from 'react';
import './App.css';
import Home from './containers/Home'
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Post from './containers/Post'
import AboutMe from './containers/AboutMe';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/tech-note" exact component={Home} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/post/:postId" component={Post} />
      </div>
    </Router>
  );
}

export default App;
