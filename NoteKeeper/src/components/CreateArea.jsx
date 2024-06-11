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
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={entry.title} />
        <textarea onClick ={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={entry.content} />
        <Zoom in={expanded}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
