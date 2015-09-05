import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import connect from '../decorators/connect';

@connect(NoteStore)
class App extends React.Component {
  render() {
    const notes = this.props.notes;

    return (
      <div>
        <button onClick={this.addNote} />
        <Notes
          items={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
      </div>
    );
  }

  addNote() {
    NoteActions.create({ task: 'newTask' });
  }

  editNote(id, task) {
    NoteActions.update({ id, task });
  }

  deleteNote(id) {
    NoteActions.delete(id);
  }
}

export default App;
