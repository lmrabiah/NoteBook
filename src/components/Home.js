import React from "react";
import AddButton from "./AddButton.js";

import ListNoteBooks from "./ListNoteBooks";
const Home = () => {
  return (
    <div>
      <div className="container px-lg-5">
        <div className="row"></div>
        <hr />
        <div className="row">
          <h1>My NoteBooks</h1>
          <AddButton />
        </div>
        <hr />
        <div className="row">
          <ListNoteBooks />
        </div>
      </div>
    </div>
  );
};

export default Home;
