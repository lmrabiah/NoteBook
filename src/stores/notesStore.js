import axios from "axios";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";

class NotesStore {
  notes = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      notes: observable,
      loading: observable,
      fetchNotes: action,
      updateNote: action,
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
  createNote = async (newNote, noteBook) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/notebooks/${noteBook.id}/notes`,
        newNote
      );
      this.notes.push(res.data);
      noteBook.notes.push({ id: res.data.id });
    } catch (error) {
      console.log("TodoStore -> createNote -> error", error);
    }
  };

  updateNote = async (updatedNote) => {
    try {
      await axios.put(
        `http://localhost:8000/notes/${updatedNote.id}`,
        updatedNote
      );
      //update in the frontend
      const note = this.notes.find((note) => note.id === updatedNote.id);
      for (const key in updatedNote) note[key] = updatedNote[key];
      note.slug = slugify(note.title);
    } catch (error) {
      console.error(error);
    }
  };
}
const notesStore = new NotesStore();
notesStore.fetchNotes();

export default notesStore;
