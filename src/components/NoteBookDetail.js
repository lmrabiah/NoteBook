import noteBookStore from "../stores/noteBookStore";
import noteStore from "../stores/notesStore";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import ListNotes from "./ListNotes";
import AddNoteButton from "./AddNoteButton";

const NoteBookDetail = () => {
  const notebookSlug = useParams().notebookSlug;

  const bookObject = noteBookStore.noteBooks.find(
    (book) => book.slug === notebookSlug
  );

  const noteFromNoteStore = bookObject.notes.map((note) =>
    noteStore.getNoteById(note.id)
  );

  if (!bookObject) return <Redirect to="/notebooks" />;
  return (
    <div className="container px-lg-5">
      <div className="row"></div>
      <hr />
      <div className="row">
        <h1>{bookObject.name} NoteBook</h1>
        <AddNoteButton noteBook={bookObject} />
      </div>
      <div className="row">
        <p> {bookObject.description}</p>
      </div>
      <hr />
      <div className="row">
        <ListNotes notes={noteFromNoteStore} noteBook={bookObject} />
      </div>
    </div>
  );
};

export default observer(NoteBookDetail);
