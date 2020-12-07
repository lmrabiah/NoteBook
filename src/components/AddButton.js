import { useState } from "react";
import NoteBooksModal from "./models/NoteBooksModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button
        onClick={openModal}
        type="button"
        className="btn btn-outline-success "
        style={{ height: 45, margin: 10, float: "right" }}
      >
        New
      </button>
      <NoteBooksModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
