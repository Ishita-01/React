import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props) {

  const[expanded,setExpanded]=useState(false);

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

  function expand(){
    setExpanded(true)
  }

  return (
    <div>
      <form className="create-note">
        {expanded ? 
        <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" 
        value={entry.title} /> : null }
        
        <textarea 
        onClick ={expand} 
        onChange={handleChange} 
        name="content" 
        placeholder="Take a note..." 
        rows={expanded ? 3 : 1}
        value={entry.content} 
        />

        <Zoom in={expanded}>
        <Fab onClick={submitEntry}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
