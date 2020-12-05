// import Lists from "./components/Lists";
import { observer } from "mobx-react";

import AddButton from "./components/AddButton.js";
import ListNoteBooks from "./components/ListNoteBooks.js";
import { Route, Switch } from "react-router";
import noteBookStore from "./stores/noteBookStore.js";

function App() {
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
      <ListNoteBooks noteBooks={noteBookStore.noteBooks} />
      {/* {
        (noteBookStore.loading = true ? (
          <h1>loaaaaaadinnng</h1>
        ) : (
          <Route path="/"></Route>
        ))
      } */}
    </div>
  );
}

export default observer(App);
