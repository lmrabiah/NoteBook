import noteBookStore from "../stores/noteBookStore";
import noteStore from "../stores/notesStore";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import ListNotes from "./ListNotes";
import AddNote from "./AddNote";
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
    <div>
      <h1> {bookObject.name}</h1>
      <p> {bookObject.description}</p>
      <AddNote noteBook={bookObject} />

      <ListNotes notes={noteFromNoteStore} noteBook={bookObject} />
    </div>
  );
};

export default observer(NoteBookDetail);
