import React, { Component } from 'react';

import './Note.css';

class Note extends Component {
  constructor() {
    super();

    this.renderNoteParagraph = this.renderNoteParagraph.bind(this);
    this.renderNoteSentence = this.renderNoteSentence.bind(this);
  }

  renderNoteSentence(sentence, index) {
    return (
      <span
        className="Note-Sentence"
        key={`sentence-${index}`}>
        {sentence}
      </span>
    );
  }

  renderNoteParagraph(paragraph, index) {
    return (
      <p key={`paragraph-${index}`}>
        {paragraph.map(this.renderNoteSentence)}
      </p>
    );
  }

  render() {
    const { note } = this.props;
    const image = require(`./../../images/${note.url}.jpg`);

    return (
      <div className="Note" id={`/${note.url}`}>
        <figure className="Note-Image" style={{ backgroundImage: `url(${image})` }}></figure>
        <header className="Note-Header">
          <div className="App-Wrapper">
            <h1 className="Note-Header-Title">{note.title}</h1>
          </div>
        </header>

        <main className="Note-Content">
          <div className="App-Wrapper">
            <div className="Note-Content-Inner">
              {note.content.map(this.renderNoteParagraph)}

              <footer className="Note-Content-Footer">{note.date}</footer>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Note;