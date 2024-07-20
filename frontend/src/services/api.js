import axios from 'axios';


export const API_BASE_URL = 'http://localhost:8000';
const api = axios.create({
  baseURL: 'http://localhost:8000/', // Replace with your Django backend URL
});

export const getProjects = () => api.get('projects/');
export const getBlogs = () => api.get('blogs/');  // Add getBlogs function


export const getBlogById = (id) => api.get(`blog/${id}/`);


export const submitContactForm = (formData) => api.post('contactme/', formData);
export default api;
