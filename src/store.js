import axios from "axios";

export async function getPosts() {
    try {
        const response = await axios.get('/api/vans');
        const data = response.data; // Access data property
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getPost(id) {
    try {
        const response = await axios.get(`/api/vans/${id}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
        return []
    }
}

export async function addPosts(newPost) {
    try {
        const response = await axios.post('/api/vans', newPost)
        const createdPost = response.data;
        console.log(createdPost);
        return createdPost
    } catch (error) {
        console.error(error);
        return null
    }
}