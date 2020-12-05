import React from "react";
import AddButton from "./AddButton.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container px-lg-5">
        <div className="row">
          <AddButton />
        </div>
        <div className="row">
          <Link to={`/notebooks`}>
            <h1>My NoteBooks</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
