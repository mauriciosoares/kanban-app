import React from 'react';
import AltContainer from 'alt/AltContainer';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

class App extends React.Component {
  render() {
    const notes = this.props.notes;

    return (
      <div>
        <button onClick={this.addNote} />
        <AltContainer
          stores={[NoteStore]}
          inject={
            {
              items: () => NoteStore.getState().notes
            }
          }>

          <Notes
            onEdit={this.editNote}
            onDelete={this.deleteNote} />

        </AltContainer>
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
