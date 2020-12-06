import React from "react";
import { observer } from "mobx-react";

import ItemNote from "./ItemNote";

const ListNotes = ({ notes, noteBook }) => {
  const List = notes.map((_note) => (
    <ItemNote note={_note} noteBook={noteBook} />
  ));

  return <>{List}</>;
};

export default observer(ListNotes);
