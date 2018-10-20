import React from 'react';
import Menu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";
import MenuIcon from 'grommet/components/icons/base/Menu';
import { allLinks, authLinks, noAuthLinks } from "./links.data";

const createAnchorLink = ({
    href,
    text,
}) => (
        <Anchor
            href={href}
            key={text}
        >
            {text}
        </Anchor>
    );

class MenuDropdown extends React.Component {
    getLinks = () => {
        const links = this.props.isAuth ? authLinks : noAuthLinks;
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

export default MenuDropdown;