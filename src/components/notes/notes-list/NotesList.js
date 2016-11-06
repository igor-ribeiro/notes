import React from 'react';
import { Link } from 'react-router';

import './NotesList.css';

const renderNote = (note) => (
  <Link
    key={note.url}
    to={note.url}
    className="Notes-List-Item"
    >
    {note.title}
  </Link>
);

const NotesList = ({ notes }) => (
  <div className="Notes-List">
    {notes.map(renderNote)}
  </div>
);

export default NotesList;
