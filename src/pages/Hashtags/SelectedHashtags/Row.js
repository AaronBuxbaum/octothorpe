import React from "react";
import ListItem from "grommet/components/ListItem";
import CloseButton from "./CloseButton";

const infoColumnStyle = {
    alignItems: "center",
    display: "flex",
};

const Row = ({
    item,
    removeItem,
}) => (
        <ListItem justify="between" separator="horizontal">
            <span>
                {item.title}
            </span>
            <span className="secondary" style={infoColumnStyle}>
                {item.popularity}
                <CloseButton onClick={removeItem} />
            </span>
        </ListItem>
    );

export default Row;
