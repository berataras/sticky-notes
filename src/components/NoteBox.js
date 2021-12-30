import React, {useState} from 'react';

function NoteBox(props) {
    const {position, notes} = props;


    const types = [
        {
            name: 'comment',
            color: 'red',
            text: 'Comment'
        },
        {
            name: 'private-comment',
            color: '#999',
            text: 'Secret Comment'
        },
        {
            name: 'note',
            color: 'orange',
            text: 'Note'
        }
    ]

    const [color, setColor] = useState(types[0].color)

    const colorChange = (e) => {
        const type = types.find(type => type.name === e.target.value);
        setColor(type.color);
    }

    return (
        <div {...props} className="note-box" style={{'--color': color,top: position.y, left: position.x}}>
            <span className="note-box-number">{notes.length + 1}</span>
            <select onChange={colorChange}>
                {types?.map((type => (
                    <option value={type.name}>{type.text}</option>
                )))}
            </select>
            <textarea placeholder="Ne düşünüyorsun?" id="" cols="30" rows="10" />
        </div>
    );
}

export default NoteBox;
