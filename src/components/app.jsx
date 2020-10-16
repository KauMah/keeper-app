import { React, useState } from "react";

import CreateNote from "./createNote";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const removeNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateNote add={addNote} />
      {notes.map((note, index) => (
        <Note
          title={note.title}
          content={note.content}
          key={index}
          id={index}
          delete={removeNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
