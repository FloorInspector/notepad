import React from 'react';

class Note extends React.Component {
  render() {

    return (
      <div>
        <h2>note</h2>
        <div>{this.props.params.key}</div>
      </div>

    )

  }
}

export default Note;