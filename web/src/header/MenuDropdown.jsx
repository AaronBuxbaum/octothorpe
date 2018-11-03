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

class MenuDropdown extends React.Component {
    isLoggedIn = () => !!get(this.props, 'data.user.username');

    getLinks = () => {
        const links = this.isLoggedIn() ? authLinks : noAuthLinks;
        return links.concat(allLinks);
    };

    render() {
        return (<Menu
            icon={<MenuIcon />}
            dropAlign={{ "right": "right" }}
        >
            {this.getLinks().map(createAnchorLink)}
        </Menu>);
    }
}

const enhance = compose(
    graphql(LOGGED_IN_USER),
);

export default enhance(MenuDropdown);