import React from "react";
import Close from "grommet/components/icons/base/Close";

const CloseButton = ({ onClick }) => (
    <Close
        colorIndex="error"
        onClick={onClick}
        size="xsmall"
        style={{ marginLeft: "8px", cursor: "pointer" }}
    />
);

export default CloseButton;
