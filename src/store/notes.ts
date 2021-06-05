import { types, flow, Instance } from "mobx-state-tree";
import { listNotes } from "../api/notes";

export const Note = types.model({
    id: types.number,
    title: types.string,
    preview: types.string,
    created_at: types.string,
    updated_at: types.string,
})

const NoteStore = types
    .model('NoteStore', {
        notes: types.array(Note),
        loading: false,
    })
    .actions((self) => ({
        listNotes: flow(function* () {
            const response = yield listNotes();
            if (response.problem) return;
            self.notes = response.data;
        })
    }))

export interface INote extends Instance<typeof Note> { }
export default NoteStore;