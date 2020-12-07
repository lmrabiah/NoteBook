import React from "react";
import notesStore from "../stores/notesStore";
import { useParams } from "react-router-dom";
import UpdateNoteButton from "./UpdateNoteButton";
import { observer } from "mobx-react";

const NoteDetail = () => {
  const noteSlug = useParams().noteSlug;
  const noteObject = notesStore.notes.find((note) => note.slug === noteSlug);

  return (
    <div className="container px-lg-5">
      <hr />
      <div className="row" class="border border-primary">
        <UpdateNoteButton
          note={noteObject}
          style={{ margin: 20, float: "right" }}
        />
        <h3>{noteObject.body}</h3>
      </div>
    </div>
  );
};

export default observer(NoteDetail);
