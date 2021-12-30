import React from 'react';

function MouseCommentText(props) {
    const {position} = props;
    return (
        <div
            className="mouse-text"
            style={{top: position.y, left: position.x + 20}}
        >
            <h4>Yorum yazmak için tıkla</h4>
        </div>
    );
}

export default MouseCommentText;
