import React from 'react';
import FilteredNoteList from '../containers/FilteredNoteList';

class Main extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div id="parent-container">
        <div id="left-menu">
          Notes
          <FilteredNoteList />
        </div>
        <div id="main-content">
          main content
          {this.props.children}
        </div>
      </div>

    )
  }
}

export default Main;

