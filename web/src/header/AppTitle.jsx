import React from 'react';
import { Link } from 'react-router-dom';
import Title from 'grommet/components/Title';
import { HOME } from '../router/pages';
import { pageRoutes } from '../router/routeTo';

const AppTitle = () => (
    <Link to={pageRoutes[HOME]}>
        <Title>Octothorpe</Title>
    </Link>
);

export default AppTitle;
