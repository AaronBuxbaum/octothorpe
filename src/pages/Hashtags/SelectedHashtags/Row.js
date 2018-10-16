import React from "react";
import ListItem from "grommet/components/ListItem";
import CloseButton from "./CloseButton";

const postfixes = [
    { 'B': 1E9 },
    { 'M': 1E6 },
    { 'K': 1E3 },
    { '': 1 }
];

const formatPopularity = (num) => {
    for (let i = 0; i < postfixes.length; i++) {
        const postfix = postfixes[i];
        const key = Object.keys(postfix)[0];
        const value = postfix[key];
        if (num >= value) {
            return Math.round(num / value) + key;
        }
    }

    return num;
};

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
                {formatPopularity(item.popularity)}
                <CloseButton onClick={removeItem} />
            </span>
        </ListItem>
    );

export default Row;
