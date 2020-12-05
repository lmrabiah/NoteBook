import { observer } from "mobx-react";
import { useState } from "react";

//component
import ItemNoteBook from "./ItemNoteBook";
// import PlusProductBtn from "./buttons/PlusProductBtn";

const ListNoteBooks = ({ noteBooks }) => {
  const List = noteBooks.map((_noteBook) => (
    <ItemNoteBook noteBook={_noteBook} />
  ));

  return <>{List}</>;
};

export default observer(ListNoteBooks);
