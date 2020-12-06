import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

//components
import Home from "./Home.js";
import ListNoteBooks from "./ListNoteBooks";
import NoteBookDetail from "./NoteBookDetail.js";
import NoteDetail from "./NoteDetail.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/notebooks/:notebookSlug">
          <NoteBookDetail />
        </Route>

        <Route path="/notes/:noteSlug">
          <NoteDetail />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
