import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import noteBookStore from "../stores/noteBookStore.js";

//components
import Home from "./Home.js";
import ListNoteBooks from "./ListNoteBooks.js";
import NoteBookDetail from "./NoteBookDetail.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/notebooks/:notebookSlug">
          <NoteBookDetail />
        </Route>
        <Route path="/notebooks">
          <ListNoteBooks noteBooks={noteBookStore.noteBooks} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
