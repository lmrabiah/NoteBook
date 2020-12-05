// import notebooks from "../notebooks.js";
import axios from "axios";
import { makeObservable, observable, action } from "mobx";
class NoteBookStore {
  noteBooks = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      noteBooks: observable,
      loading: observable,
      fetchNoteBooks: action,
      createNoteBook: action,
    });
  }

  // get todayList() {
  //   return this.noteBooks.filter((noteBook) => !noteBook.done);
  // }

  fetchNoteBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notebooks");
      this.noteBooks = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ProductStore -> fetchProducts -> error", error);
    }
  };

  createNoteBook = async (newNoteBook) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/notebooks",
        newNoteBook
      );
      this.noteBooks.push(res.data);
    } catch (error) {
      console.log("TodoStore -> createNotebook -> error", error);
    }
  };
}

const noteBookStore = new NoteBookStore();
noteBookStore.fetchNoteBooks();

export default noteBookStore;
