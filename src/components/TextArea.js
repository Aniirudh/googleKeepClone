import React, { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/TextArea.css";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const TextArea = ({notes,setNotes}) => {
  const [input, setInput] = useState("");





  const handleSbmit=(e)=>{
    e.preventDefault();
    if (input!==""){
       const newNote={ id:Date.now(),
        text:input,}
        setNotes([...notes,newNote])
        setInput("")
    }
  }
  const handleNoteDelete = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <div className="area">
        <form onSubmit={handleSbmit} className="form-container">
      <textarea className='inputText' type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Take a note..." ></textarea>
      <br></br>
      <button type="Submit" className="submit-button"><FontAwesomeIcon icon={faPlus} className="add-icon" /></button>
      </form>
      <div className="note-container">
        {notes?.map((note)=>(
            <div className="note" key={note.id}>
                {note.text}
                <button
              className="delete-button"
              onClick={() => handleNoteDelete(note.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TextArea;
