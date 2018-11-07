import { HttpLink } from 'apollo-link-http';
import request from './request';

const uri = 'http://localhost:4000';

const httpLink = new HttpLink({
    uri,
    credentials: 'same-origin',
});

export default httpLink;
