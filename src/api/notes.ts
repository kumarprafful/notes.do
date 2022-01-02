import { create } from "apisauce";

const api = create({
    // baseURL: "http://localhost:3000",
    baseURL: "https://c6f89083a11e.ngrok.io",
    timeout: 5000,
});
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MjMwMTE1MjEsInVzZXJfaWQiOjF9.L1c1RjUc6SrdtOLnD-FujdsJr23cbx2C-PdB_rKIe9E`;

api.addRequestTransform((request) => {
    request.headers['Authorization'] = `Bearer ${token}`
})

export const listNotes = () => api.get(`/notes/`);
export const fetchANote = (noteID: number) => api.get(`/note/?note_id=${noteID}`);
export const fetchContents = (noteID: number) => api.get(`/note/content/list/?note_id=${noteID}`);
