import React from 'react';
import { Link } from 'react-router'

class NoteNav extends React.Component  {

  constructor() {
    super();
  }

  render() {
    console.log(this.props.note)
    return (
      <Link to={'/note/' + this.props.noteKey}>{this.props.note.subject}</Link>
    )
  }
}

export default NoteNav;