import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import ListNotes from "./ListNotes";
import notesStore from "../stores/notesStore";
import { useParams } from "react-router-dom";
import noteBookStore from "../stores/noteBookStore";

const ItemNoteBook = ({ noteBook }) => {
  return (
    <div>
      <Link to={`/notebooks/${noteBook.slug}`}>
        <h1>{noteBook.name} NoteBook</h1>
      </Link>
      {/* <ListNotes notes={notes} /> */}
    </div>
  );
};

export default observer(ItemNoteBook);
