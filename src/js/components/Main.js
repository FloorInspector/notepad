import React from 'react';
import FilteredNoteList from '../containers/FilteredNoteList';
import NoteListHeader from './NoteListHeader'

class Main extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div id="parent-container">
        <div id="left-menu">
          <NoteListHeader />
          <FilteredNoteList />
        </div>
        <div id="main-content">
          {this.props.children}
        </div>
      </div>

    )
  }
}

export default Main;

