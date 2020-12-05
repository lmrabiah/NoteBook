import React from "react";
import { observer } from "mobx-react";
import notesStore from "../stores/notesStore";
import ItemNote from "./ItemNote";

const ListNotes = () => {
  console.log();
  const List = notesStore.notes.map((_note) => <ItemNote note={_note} />);

  return <>{List}</>;
};

export default observer(ListNotes);
