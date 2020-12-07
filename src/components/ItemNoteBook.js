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
        <h4>{noteBook.name} NoteBook</h4>
      </Link>
    </div>
  );
};

export default observer(ItemNoteBook);
