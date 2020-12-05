import { observer } from "mobx-react";
import { useState } from "react";
import notebookStore from "../stores/noteBookStore";

// //style
// import { TotalPicStyle } from "../styles";
// // store

//component
import ItemNoteBook from "./ItemNoteBook";
// import SearchBar from "./SearchBar";
// import PlusProductBtn from "./buttons/PlusProductBtn";

const ListNoteBooks = ({ noteBooks }) => {
  const List = noteBooks.map((_noteBook) => (
    <ItemNoteBook noteBook={_noteBook} />
  ));

  return <>{List};</>;
};

export default observer(ListNoteBooks);
