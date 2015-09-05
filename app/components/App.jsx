import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };

    // PROTIP: bind the context here increases the
    // performance instead of using it in the render method.
    this.findNote = this.findNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  render() {
    const notes = this.state.notes;
    return (
      <div>
        <button onClick={this.addNote} />
        <Notes
          items={notes}
          onEdit={this.editNote} />
      </div>
    );
  }

  addNote() {
    console.log(this);
    this.setState({
      notes: this.state.notes.concat({
              id: uuid.v4(),
              task: 'new task'
      })
    });
  }

  editNote(id, task) {
    let notes = this.state.notes;
    const noteIndex = this.findNote(id);

    if(noteIndex < 0) return;

    notes[noteIndex].task = task;

    this.setState({ notes });
  }

  findNote(id) {
    const notes = this.state.notes;
    const noteIndex = notes.findIndex(note => note.id === id);

    if(noteIndex < 0) console.warn('Failed to find note', notes, id);

    return noteIndex;
  }
}

export default App;
