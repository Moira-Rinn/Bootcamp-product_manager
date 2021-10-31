import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';

function App() {

  return (
    <div className="App">
      <Router>
        <Main path='/products/' />
        <Details path='/products/:id' />
        <Update path="/products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
