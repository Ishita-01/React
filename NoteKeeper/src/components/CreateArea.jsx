import React, { useState } from "react";

function CreateArea(props) {
  const [entry,setEntry]=useState({
    title:"",
    content:"",
  })
  
  function handleChange(event){
    const {name,value}=event.target
    setEntry(prevEntry => {
      return{
        ...prevEntry,
        [name]:value
      }
    })
  }

  function submitEntry(event) {
    props.addNote(entry);
    setEntry({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={entry.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={entry.content} />
        <button onClick={submitEntry}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
