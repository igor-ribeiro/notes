import React, { Component } from 'react';

import './App.css';

import NotesListPage from './pages/NotesListPage';
import Note from './components/note/Note';

import notes from './notes';

class App extends Component {
  constructor() {
    super();

    this.state = {
      route: window.location.hash,
    };

    this.handleHashChange = this.handleHashChange.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.handleHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  handleHashChange() {
    this.setState({ route: window.location.hash });
  }

  redirect(url) {
    const hash = /^\//.test(url) ? url : `/${url}`;

    window.location.hash = hash;
  }

  renderNoteNotFound() {
    return (
      <div className="App-Error">
        <div className="App-Error-Text">Nota não encontrada</div>
        <a href="#/">Voltar à página inicial</a>
      </div>
    );
  }

  renderPage() {
    const noteUrl = this.state.route.substring(2);

    if (noteUrl.length) {
      const note = notes.filter((note) => note.url === noteUrl)[0];

      if (!note) {
        return this.renderNoteNotFound();
      }

      return (
        <Note
          redirect={this.redirect}
          note={note}/>
      );
    }

    return (
      <NotesListPage
        redirect={this.redirect}
        notes={notes}/>
    );
  }

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

