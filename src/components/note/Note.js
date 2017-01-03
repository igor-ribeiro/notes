import React, { Component } from 'react';

import './Note.css';

class Note extends Component {
  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
    this.renderNoteParagraph = this.renderNoteParagraph.bind(this);
    this.renderNoteSentence = this.renderNoteSentence.bind(this);

    this.state = {
      headerFixed: false,
    };
  }

  componentDidMount() {
    // document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const headerFixed = document.body.scrollTop >= 144;

    this.setState({ headerFixed });
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
    const { note, redirect } = this.props;
    const image = require(`./../../images/${note.url}.jpg`);

    return (
      <div className="Note" id={`/${note.url}`}>
        <header className="Note-Header" style={{ backgroundImage: `url(${image})` }}>
          <div className="App-Wrapper">
            <h1 className="Note-Header-Title">{note.title}</h1>
          </div>
        </header>

        <div className="App-Wrapper">
          <main className="Note-Content">
            {note.content.map(this.renderNoteParagraph)}
          </main>
        </div>
      </div>
    );
  }
}

export default Note;
