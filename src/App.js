import {useEffect, useRef, useState} from "react";
import './App.css';
import {MouseCommentText, Note, NoteBox} from "./components";


function App() {

    const screen = useRef(null)
    const [mode, setMode] = useState(false);
    const [boxVisible, setBoxVisible] = useState(false);
    const [notes, setNotes] = useState([
        {
            id: "1",
            note: "bu bir test notu xd",
            color: "red",
            position: {
                x: 50,
                y: 100
            }
        }
    ])
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })
    const [currentPosition, setCurrentPosition] = useState({
        x: 0,
        y: 0
    });

    function handleKeyUp(e){
        if (e.key === 'c'){
           setMode(!mode)
            setBoxVisible(false)
        }
    }

    function handleClick(e){
        setCurrentPosition({
            x: position.x,
            y: position.y
        })
        setBoxVisible(true);
    }

    function handleMouseMove(e){
        setPosition({
            x: e.pageX,
            y: e.pageY
        })
    }

    useEffect(() => {
        screen.current.focus();
        console.log(screen)
    }, [])
  return (
    <div
        ref={screen}
        onClick={mode && handleClick}
        onMouseMove={handleMouseMove}
        tabIndex="0" onKeyUp={handleKeyUp}
        className={`screen ${mode ? 'editable' : ''}`}>
        <img height="350" src="https://s.yimg.com/uu/api/res/1.2/dBkcufjWEf1ZLHDw6maxdw--~B/aD02NTA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-US/fatherly_721/ec4eee4fa66b6de1025bfe3a00e99f1a" alt=""/>

        {mode && <MouseCommentText position={position} />}

        {mode && (<div>Yorum modu aktif!</div>)}

        {boxVisible && <NoteBox onMouseEnter={() => setMode(false)} onMouseLeave={() => setMode(true)}  position={currentPosition} notes={notes} />}

        {notes && notes.map((note) => <Note key={note.id} note={note} />)}
    </div>
  );
}

export default App;
