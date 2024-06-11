import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [items, setItems] = useState([]);

  function addItem(newEntry) {
    setItems((prevItems) => {
      return [...prevItems, newEntry];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addItem}/>
      {items.map((noteItem,index )=> {
        return(
          <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onChanged={deleteItem}
          />
        );
      })}
      
      <Footer />
    </div>
  );
}

export default App;
