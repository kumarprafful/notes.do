import { create } from "apisauce";

const api = create({
    // baseURL: "http://localhost:3000",
    baseURL: "https://c6f89083a11e.ngrok.io",
    timeout: 5000,
});
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MjI5MjQ4MzgsInVzZXJfaWQiOjF9.C7HZu8rqQO6WbqKUdrg2CoQ1jPkS5STRrkJhULt-HWY`;

api.addRequestTransform((request) => {
    request.headers['Authorization'] = `Bearer ${token}`
})

export const listNotes = () => api.get(`/notes/`)