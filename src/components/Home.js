import React from "react";
import AddButton from "./AddButton.js";

import ListNoteBooks from "./ListNoteBooks";
const Home = () => {
  return (
    <div>
      <div className="container px-lg-5">
        <div className="row">
          <AddButton />
        </div>
        <div className="row">
          <h1>My NoteBooks</h1>
          <h1>
            <ListNoteBooks />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
