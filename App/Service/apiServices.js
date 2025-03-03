import axios from 'axios';
import { attachInterceptors } from './apiInterceptors'; 
export const dummyJsonService = axios.create({
    baseURL: 'https://dummyjson.com/',
});

export const otherApiService = axios.create({
    baseURL: 'https://api.otherservice.com/',
});

export const anotherApiService = axios.create({
    baseURL: 'https://api.anotherservice.net/',
});

// Attach interceptors to each service
attachInterceptors(dummyJsonService, 'DummyJSON');
attachInterceptors(otherApiService, 'Other API');
attachInterceptors(anotherApiService, 'Another API');