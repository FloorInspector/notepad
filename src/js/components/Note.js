import React from 'react';

export default ({note}) => {
  return (
    <div className="note-view">
      <h2>{note.subject}</h2>
      <div className="note-meta">
        <span className="label">Created: </span>
        <span className="value">{new Date( note.created ).toDateString()}</span>
        <span className="label">Last updated: </span>
        <span className="value">{new Date( note.lastUpdated ).toDateString()}</span>
      </div>
      <div>{note.body.text}</div>
    </div>
  )
}