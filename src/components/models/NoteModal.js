import { useState } from "react";
import Modal from "react-modal";
import notesStore from "../../stores/notesStore";

const NoteModal = ({ isOpen, closeModal, noteBook, oldNote }) => {
  const [note, setNote] = useState(
    oldNote ?? {
      title: "",
      body: "",
    }
  );

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal();
    notesStore[oldNote ? "updateNote" : "createNote"](note, noteBook);
    closeModal();
  };

  const handelCancel = (event) => {
    event.preventDefault();
    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="New Note Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label> Title </label>
            <input
              value={note.title}
              name="title"
              type="text"
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label> Body </label>
          <input
            value={note.body}
            name="body"
            type="text"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          {oldNote ? "update" : "create"}
        </button>
        <button onClick={handelCancel}>Cancel</button>
      </form>
    </Modal>
  );
};

export default NoteModal;
