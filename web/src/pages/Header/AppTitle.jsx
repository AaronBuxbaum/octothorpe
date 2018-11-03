import React from 'react';
import { Link } from 'react-router-dom';
import Title from 'grommet/components/Title';
import { HOME } from '../../router/pages';

const APP_NAME = 'Octothorpe';

const AppTitle = () => (
    <Link to={HOME.path}>
        <Title>{APP_NAME}</Title>
    </Link>
);

export default AppTitle;
