import { types, flow, Instance } from "mobx-state-tree";
import { fetchANote, fetchContents, listNotes } from "../api/notes";

export const Note = types.model({
    id: types.number,
    title: types.string,
    preview: types.string,
    created_at: types.string,
    updated_at: types.string,
})

export const Content = types.model({
    id: types.number,
    type: types.string,
    text: types.string,
    file: types.string,
})

const NoteStore = types
    .model('NoteStore', {
        notes: types.array(Note),
        note: types.maybeNull(Note),
        contents: types.array(Content),
        loading: false,
    })
    .actions((self) => ({
        listNotes: flow(function* () {
            const response = yield listNotes();
            if (response.problem) return;
            self.notes = response.data;
            console.log('self.notes', self.notes.length);
        }),
        fetchANote: flow(function* (noteID) {
            const response = yield fetchANote(noteID);
            if (response.problem) return;
            self.note = response.data;
        }),
        fetchContents: flow(function* (noteID) {
            const response = yield fetchContents(noteID);
            if (response.problem) return;
            self.contents = response.data;
            console.log('self.contents', self.contents.length); 
        })
    }))

export interface INote extends Instance<typeof Note> { }
export default NoteStore;