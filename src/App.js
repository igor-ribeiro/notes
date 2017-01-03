import React, { Component } from 'react';

import './App.css';

import Note from './components/note/Note';

import notes from './notes';

class App extends Component {
  render() {
    return (
      <div className="App">
        {notes.map((note) => (
          <Note note={note} key={note.url}/>
        ))}
      </div>
    );
  }
}

export default App;

