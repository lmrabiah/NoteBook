import React from "react";

const ItemNote = ({ note }) => {
  return (
    <div>
      <p>{note.title}</p>
      <p>{note.body}</p>
    </div>
  );
};

export default ItemNote;
