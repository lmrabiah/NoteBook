import React from "react";
import noteBookStore from "../stores/noteBookStore";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

const NoteBookDetail = () => {
  const notebookSlug = useParams().notebookSlug;

  const bookObject = noteBookStore.noteBooks.find(
    (book) => book.slug === notebookSlug
  );

  if (!bookObject) return <Redirect to="/notebooks" />;
  return (
    <div>
      <h1> {bookObject.name}</h1>
      <p> {bookObject.description}</p>
    </div>
  );
};

export default observer(NoteBookDetail);
