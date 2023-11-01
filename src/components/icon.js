import React from "react";
import { Icon } from "@ui-kitten/components";

const CustomIcon = ({ name, color, size, ...rest }) => {
    return (
        <Icon
            name={name}
            {...rest}
            fill={color ? color : '#2C14DD'}
            style={{ width: size ? size : 20, height: size ? size : 20 }}
        />
    )
}

export default CustomIcon;