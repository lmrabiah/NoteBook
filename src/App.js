import { observer } from "mobx-react";
import noteBookStore from "./stores/noteBookStore.js";
import notesStore from "./stores/notesStore.js";
//components
import Routes from "./components/Routes";

function App() {
  return (
    // {/* {noteBookStore.loading || notesStore.loading ? (
    //   <h1>loaaaaaadinnng</h1>
    // ) : ( */}
    <>
      {/* <Home /> */}
      <Routes />
      {/* )} */}
    </>
  );
}

export default observer(App);
