import React from 'react';
import { Text as DefaultText, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

type Props = {
    style?: any;
    color?: string;
    fontSize?: number;
    bold?: boolean;
    textDecorationLine?: any;
    center?: boolean;
    children: any;
    noEnd?: boolean;
    numberOfLines?: number;
    lineHeight?: number;
};

export const Text = ({ style, color, fontSize, bold, textDecorationLine, center, children, numberOfLines, lineHeight }: Props) => {
    const { colors }: any = useTheme();
    const styles = StyleSheet.create({
        text: {
            fontSize: fontSize ? fontSize : 16,
            fontFamily: bold ? 'bold' : 'regular',
            textAlign: center ? 'center' : 'left',
            textDecorationLine: textDecorationLine ? textDecorationLine : 'none',
            color: color ? color : colors.text,
            lineHeight: lineHeight ? lineHeight : (fontSize ? fontSize + 10 : 20),
        },
    });
    return (
        <DefaultText numberOfLines={numberOfLines} style={[style, styles.text]}>
            {children}
        </DefaultText>
    );
};
