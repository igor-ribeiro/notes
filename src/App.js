import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <h1 className="Header-Title">Notes</h1>
        </header>

        <main className="Content">
          <div className="Notes-List">
            <a href="#/logo-ela" className="Notes-List-Item">Logo Ela</a>
            <a href="#/guria" className="Notes-List-Item">Guria</a>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

