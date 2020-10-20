import { React, useState } from "react";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const noteChanged = (evt) => {
    const { name, value } = evt.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const handleSubmit = (evt) => {
    props.add(note);
    setNote({
      title: "",
      content: "",
    });
    evt.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={noteChanged}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows="3"
        ></textarea>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default CreateNote;
