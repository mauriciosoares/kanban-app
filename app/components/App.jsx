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
    this.addNote = this.addNote.bind(this);
  }

  render() {
    const notes = this.state.notes;
    return (
      <div>
        <button onClick={this.addNote} />
        <Notes items={notes} />
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
}

export default App;
