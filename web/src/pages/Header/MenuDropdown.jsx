import React from 'react';
import { compose, graphql } from 'react-apollo';
import { get } from 'lodash';
import { LOGGED_IN_USER } from './queries';
import Menu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";
import MenuIcon from 'grommet/components/icons/base/Menu';
import { allLinks, authLinks, noAuthLinks } from "./links.data";

const createAnchorLink = ({ path, title, onClick }) => (
    <Anchor href={path} label={title} onClick={onClick} key={title} />
);

const isLoggedIn = (data) => !!get(data, 'user');

const getLinks = (data) => {
    const links = isLoggedIn(data) ? authLinks : noAuthLinks;
    return links.concat(allLinks);
};

const MenuDropdown = ({ data }) => (
    <Menu
        icon={<MenuIcon />}
        dropAlign={{ "right": "right" }}
    >
        {getLinks(data).map(createAnchorLink)}
    </Menu>
);

const enhance = compose(
    graphql(LOGGED_IN_USER),
);

export default enhance(MenuDropdown);