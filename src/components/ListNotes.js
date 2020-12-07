import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import ItemNote from "./ItemNote";

const ListNotes = ({ notes, noteBook }) => {
  const UL = styled.ul`
    list-style-image: url("notebook.png");
  `;

  const List = notes.map((_note) => (
    <ItemNote note={_note} noteBook={noteBook} />
  ));

  return <UL>{List}</UL>;
};

export default observer(ListNotes);
