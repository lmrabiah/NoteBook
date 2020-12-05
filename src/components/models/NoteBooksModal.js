import react from "react";
import { useState } from "react";
import Modal from "react-modal";
import noteBookStore from "../../stores/noteBookStore";

const NoteBooksModal = ({ isOpen, closeModal }) => {
  const [noteBook, setNoteBook] = useState({
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    setNoteBook({ ...noteBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    noteBookStore["createNoteBook"](noteBook);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="task Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label> Name </label>
            <input
              value={noteBook.name}
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label> Description </label>
          <input
            value={noteBook.description}
            name="description"
            type="text"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          create
        </button>
      </form>
    </Modal>
  );
};

export default NoteBooksModal;
