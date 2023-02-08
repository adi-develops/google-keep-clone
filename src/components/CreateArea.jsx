import React, { useState } from "react"

function CreateArea(props) {

    const [note, setNote] = useState({title: "", content: ""})

    function handleNote(event) {
        const {value, name} = event.target;
        
        setNote(prevNote => {
                return {
                    ...prevNote, [name]: value
                }
        })
    }
    

    function submitNote(event) {
        props.onAdd(note)
        event.preventDefault();
        setNote({title: "", content: ""})
    }
    
  return (
    <div>
      <form className="create-note">
        <input onChange={handleNote} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleNote} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
