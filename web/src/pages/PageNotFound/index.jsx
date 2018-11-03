import React from 'react';
import Heading from 'grommet/components/Heading';

const PAGE_MESSAGE = 'Error 404: Page not found :(';

const PageNotFound = () => (
    <Heading>
        {PAGE_MESSAGE}
    </Heading>
);

export default PageNotFound;
