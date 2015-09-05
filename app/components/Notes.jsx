import React from 'react';
import Note from './Note.jsx';

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.renderNote = this.renderNote.bind(this);
  }

  render() {
    const notes = this.props.items;

    return (
      <ul>
        { notes.map(this.renderNote) }
      </ul>
    )
  }

  renderNote(note) {
    return (
      <li key={note.id}>
        <Note
          task={note.task}
          onEdit={this.props.onEdit.bind(null, note.id)} />
      </li>
    )
  }
}

export default Notes;
