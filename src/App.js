import { observer } from "mobx-react";
import noteBookStore from "./stores/noteBookStore.js";
//components
import Routes from "./components/Routes";

function App() {
  return <>{noteBookStore.loading ? <h1>loaaaaaadinnng</h1> : <Routes />}</>;
}

export default observer(App);
