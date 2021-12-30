import React from 'react';

function Note(props) {
    const {note} = props;
    return (
        <div
            style={{top: note.position.y, left: note.position.x, '--color': note.color}}
            className="note"
        >
            {note.note}
        </div>
    );
}

export default Note;
