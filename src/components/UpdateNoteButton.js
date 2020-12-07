import React from "react";
import { BsPencil } from "react-icons/bs";
import { useState } from "react";
import NoteModal from "./models/NoteModal";

const UpdateNoteButton = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <BsPencil
        className="float-right"
        size="2em"
        onClick={openModal}
        style={{ margin: 10 }}
      />
      <NoteModal isOpen={isOpen} closeModal={closeModal} oldNote={note} />
    </>
  );
};

export default UpdateNoteButton;
