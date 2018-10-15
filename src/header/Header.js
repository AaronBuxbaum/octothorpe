import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Head from "grommet/components/Header";
import Title from "grommet/components/Title";
import Menu from "./MenuDropdown";
import Avatar from "./Avatar";
import PageTitle from "./PageTitle";
import { HOME } from "../router/pages";
import { pageRoutes } from "../router/routeTo";

const LeftHandSide = () => (
    <Link to={pageRoutes[HOME]}>
        <Title>Octothorpe</Title>
    </Link>
);

const RightHandSide = () => (
    <div className="right-hand-side">
        <Avatar />
        <Menu />
    </div>
);

const Header = () => (
    <>
        <Head style={{ justifyContent: 'space-between' }}>
            <LeftHandSide />
            <RightHandSide />
        </Head>
        <PageTitle />
    </>
);

export default Header;
