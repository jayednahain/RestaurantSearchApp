import axios from 'axios';

import { attachInterceptors } from './apiInterceptors';

export const dummyJsonClient = axios.create({
    baseURL: 'https://dummyjson.com/',
});

attachInterceptors(dummyJsonClient, 'DummyJSON');