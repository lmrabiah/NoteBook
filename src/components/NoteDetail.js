import React from "react";
import notesStore from "../stores/notesStore";
import noteBookStore from "../stores/noteBookStore";

import { useParams } from "react-router-dom";

import AddNote from "./AddNote";

const NoteDetail = () => {
  // ////not sure
  // const notebookSlug = useParams().notebookSlug;

  // const bookObject = noteBookStore.noteBooks.find(
  //   (book) => book.slug === notebookSlug
  // );

  // const noteFromNoteStore = bookObject.notes.map((note) =>
  //   noteStore.getNoteById(note.id)
  // );

  // //
  const noteSlug = useParams().noteSlug;

  const noteObject = notesStore.notes.find((note) => note.slug === noteSlug);
  // const noteFromNoteStore = noteObject.notes.map((note) =>
  //   notesStore.getNoteById(note.id)
  // );
  return (
    <div>
      <p>{noteObject.body}</p>
      <AddNote note={noteObject} />
    </div>
  );
};

export default NoteDetail;
