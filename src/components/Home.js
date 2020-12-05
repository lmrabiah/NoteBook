import React from "react";
import AddButton from "./AddButton.js";

const Home = () => {
  return (
    <div>
      <div className="container px-lg-5">
        <div className="row">
          <AddButton />
        </div>
        <div className="row">
          <h1>NoteBook</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
