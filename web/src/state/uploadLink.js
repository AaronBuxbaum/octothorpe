import { createUploadLink } from 'apollo-upload-client';

const uri = 'http://localhost:4000';

// this is used as the terminating link as a replacement to httpLink
const uploadLink = createUploadLink({
    uri,
    credentials: 'same-origin',
});

export default uploadLink;
