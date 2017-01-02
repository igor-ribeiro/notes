import React, { Component } from 'react';

import './NotesListPage.css';

class NotesListPage extends Component {
  constructor() {
    super();

    this.renderNoteList = this.renderNoteList.bind(this);
  }

  renderNoteList(note, index) {
    return (
      <div
        onClick={() => this.props.redirect(note.url)}
        className="Notes-List-Note"
        key={note.url}>
        <span
          className="Notes-List-Note-Text">
          {note.title}
        </span>
        <span
          className="Notes-List-Note-Date">
          {note.date}
        </span>
      </div>
    );
  }

  render() {
    return (
      <div className="App-Wrapper">
        {this.props.notes.map(this.renderNoteList)}
      </div>
    );
  }
}

export default NotesListPage;
