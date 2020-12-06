import React from "react";
import { useParams } from "react-router";
import notesStore from "../stores/notesStore";

const NoteDetail = () => {
  const noteSlug = useParams().noteSlug;

  const noteObject = notesStore.notes.find((note) => note.slug === noteSlug);
  return (
    <div>
      <p>{noteObject.body}</p>;
    </div>
  );
};

export default NoteDetail;
