import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    else if(localStorage.getItem('profile2')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile2')).token}`;
    }
    return req;
})

export const fetchUsers = () => API.get('/user');
export const userChats = (id) => API.get(`/chat/${id}`);
export const getUser = (userId) => API.get(`/user/${userId}`);
export const deleteUser = (id) => API.delete(`/user/${id}`);

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const signInAdmin = (formData) => API.post('/admin/signinadmin', formData);

export const getMessages = (id) => API.get(`/message/${id}`);
export const addMessage = (data) => API.post('/message/', data);