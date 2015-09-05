import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.storeChanged = this.storeChanged.bind(this);
    console.log(NoteStore.getState());
    this.state = NoteStore.getState();
  }

  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged);
  }

  storeChanged(state) {
    this.setState(state);
  }

  render() {
    const notes = this.state.notes;

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
