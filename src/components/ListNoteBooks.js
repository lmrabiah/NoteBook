import { observer } from "mobx-react";
import { useState } from "react";
import noteBookStore from "../stores/noteBookStore";
//component
import ItemNoteBook from "./ItemNoteBook";
// import PlusProductBtn from "./buttons/PlusProductBtn";

const ListNoteBooks = () => {
  const List = noteBookStore.noteBooks.map((_noteBook) => (
    <ItemNoteBook noteBook={_noteBook} />
  ));

  return <p>{List}</p>;
};

export default observer(ListNoteBooks);
