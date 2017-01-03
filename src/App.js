import React, { Component } from 'react';

import './App.css';

import NotesListPage from './pages/NotesListPage';
import Note from './components/note/Note';

const notes = [
  { title: 'Um homem precisa crescer?', url: 'um-homem-precisa-crescer', date: '2016/12/01', image: 'https://static.pexels.com/photos/207/fishing-sea-nature-man.jpg', content: [
    ['Quando um homem cresce?', 'Quando compra um carro?', 'Quando sente falta do relógio no pulso?', 'Quando a barba aparece?', 'Quando bebe uísque?', 'Quando aprende a amar?'],
    ['Um homem cresce sem um homem pra ajudar?'],
    ['Quando aprende a fazer churrasco?', 'Quando tem um filho?', 'Quando deixa de ser um filho?', 'Quando aprende a dar uns amassos?', 'Quando precisa pagar contas?' ,'Quando precisa tomar decisões?'],
    ['Álcool ou gasolina?'],
    ['Quando tem emails pra ler?', 'Quando tem relatórios pra entregar?', 'Quando aprende a dar nó na gravata?', 'Quando aprende a dar nó nas mulheres?', 'Quando sente falta de ser menino?', 'Quando sente falta das meninas?'],
    ['Um homem precisa crescer?'],
  ] },
  { title: 'O Poeta', url: 'o-poeta', date: '2016/12/01', image: 'https://static.pexels.com/photos/169657/pexels-photo-169657.jpeg', content: [
    ['O poeta é uma farsa.'],
    ['É quem mais fala de amor', 'e quem menos sabe amar.'],
    ['É quem tem convicções sobre as mulheres', 'e quem menos entende seus olhares.'],
    ['O poeta é uma mentira', 'fácil de acreditar.'],
  ] },
];

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

