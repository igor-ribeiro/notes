import React, { Component } from 'react';

import './NotePage.css';


class NotePage extends Component {
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
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
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

    return (
      <div className="Note">
        <div className="Note-Header-Placeholder"></div>
        <header className={`Note-Header ${this.state.headerFixed ? 'Fixed': ''}`}>
          <div className="Note-Header-Image" style={{ backgroundImage: `url(${note.image})` }}></div>
          <div className="App-Wrapper">
            <div
              className="Note-Header-Icon"
              onClick={() => redirect('/')}>
              &larr;
            </div>
            <h1 className="Note-Header-Title">{note.title}</h1>
          </div>
        </header>

        <main className="Note-Content">
          <div className="App-Wrapper">
            {note.content.map(this.renderNoteParagraph)}
          </div>
        </main>
      </div>
    );
  }
}

export default NotePage;
