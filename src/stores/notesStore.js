import axios from "axios";
import { makeObservable, observable, action } from "mobx";

class NotesStore {
  notes = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      notes: observable,
      loading: observable,
      fetchNotes: action,
      createNote: action,
      getNoteById: action,
    });
  }

  getNoteById = (noteId) => this.notes.find((note) => note.id === noteId);
  fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      this.notes = response.data;
      this.loading = false;
    } catch (error) {
      console.error("notesStore -> fetchNotes -> error", error);
    }
  };

  createNote = async (newNote) => {
    try {
      const res = await axios.post("http://localhost:8000/notes", newNote);
      this.notes.push(res.data);
    } catch (error) {
      console.log("TodoStore -> createNote -> error", error);
    }
  };
}

const notesStore = new NotesStore();
notesStore.fetchNotes();

export default notesStore;
