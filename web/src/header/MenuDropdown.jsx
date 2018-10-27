import React from 'react';
import { compose, graphql } from 'react-apollo';
import { get } from 'lodash';
import gql from 'graphql-tag';
import Menu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";
import MenuIcon from 'grommet/components/icons/base/Menu';
import { allLinks, authLinks, noAuthLinks } from "./links.data";

const createAnchorLink = (props) => (
    <Anchor {...props} key={props.label} />
);

const LOGGED_IN_USER = gql`
    query LoggedInUser {
        user {
            username
        }
    }
`;

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