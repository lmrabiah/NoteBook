import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { useState } from "react";
import NoteModal from "./models/NoteModal";

const AddNoteButton = ({ noteBook, note }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <BsPlusCircle
        style={{ margin: 10 }}
        className="float-right"
        size="2em"
        onClick={openModal}
      />
      <NoteModal
        isOpen={isOpen}
        closeModal={closeModal}
        noteBook={noteBook}
        oldNote={note}
      />
    </>
  );
};

export default AddNoteButton;
