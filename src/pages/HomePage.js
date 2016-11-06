import React from 'react';

import Page from './../components/page/Page';
import NotesList from './../components/notes/notes-list/NotesList';

const notes = [
  { url: 'titulo-1', title: 'Título 1' },
  { url: 'titulo-2', title: 'Título 2' },
  { url: 'titulo-3', title: 'Título 3' },
];

class HomePage extends React.Component {
  render() {
    return (
      <Page title="Notes">
        <NotesList notes={notes} />
      </Page>
    );
  }
}

export default HomePage;
