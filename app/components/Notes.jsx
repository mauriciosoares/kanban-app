import React from 'react';
import Note from './Note.jsx';

class Notes extends React.Component {
  render() {
    const notes = this.props.items;

    return (
      <ul>
        { notes.map(this.renderNote) }
      </ul>
    )
  }

  renderNote(item) {
    return (
      <li key={item.id}>
        <Note task={item.task} />
      </li>
    )
  }
}

export default Notes;
