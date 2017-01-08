import React from 'react';
import NoteNav from './NoteNav';

export default ({ notes }) => {

  const noteItems = Object.keys(notes).map((key) => {
    const note = notes[key];
    return <li key={key}><NoteNav noteKey={key} note={note} /></li>;
  });

  return (
    <div>
      <ul className="note-list">
        {noteItems}
      </ul>
    </div>
  )
};