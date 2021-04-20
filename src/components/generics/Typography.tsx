import React from 'react';

import { Text } from "react-native";
import { FONT_STYLE, theme } from "../../data";

interface Props {
    variant?: string,
    children: JSX.Element[] | JSX.Element | string | number,
}

function Typography({
    variant,
    children,
}: Props) {
    const darkTheme = theme === 'dark';

    const getFontSize = () => {
        switch (variant) {
            case 'h1':
                return 64
            case 'h2':
                return 48
            case 'h3':
                return 32
            case 'h4':
                return 24
            case 'h5':
                return 16
            case 'h6':
                return 12
            default:
                return 14
        }

    }

    return (
        <Text
            style={{
                color: darkTheme ? '#fff' : '#000',
                fontFamily: FONT_STYLE,
                fontSize: getFontSize(),
            }}
        >
            {children}
        </Text>
    )
}

export default Typography;