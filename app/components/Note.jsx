import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../libs/item_types';

const noteSource = {
  beginDrag(props) {
    console.log('begin dragging note', props);

    return {};
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();

    console.log('dragging note', sourceProps, targetProps);
  }
}

@DragSource(ItemTypes.NOTE, noteSource, (connect) => ({
  connectDragSource: connect.dragSource()
}))
@DropTarget(ItemTypes.NOTE, noteTarget, (connect) =>({
  connectDropTarget: connect.dropTarget()
}))
class Note extends React.Component {
  render() {
    const {
      connectDragSource,
      connectDropTarget,
      onMove,
      data,
      ...props
    } = this.props;

    console.log(props);

    console.log(this.props);

    return connectDragSource(connectDropTarget(
      <li {...this.props}>{props.children}</li>
    ));
  }
}

export default Note;
