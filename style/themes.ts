import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

export const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        primary: '#FAd0cc', 
        secondary: '#12AC5D', // Meadow
        grey: '#B4B4B4', // Nobel
        text: '#fff',
        border: '#EAEAEA',
        seperator: '#B4B4B4',
    },
    borderRadius: {
        input: 8,
        card: 8,
        button: 0,
        image: 8
    },
};

export const CustomDarkTheme = {
    ...NavigationDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        primary: '#FAd0cc', 
        secondary: '#12AC5D', // Meadow
        dark_grey: '#707070', // Dove
        grey: '#B4B4B4', // Nobel
        seperator: '#3a3b3c',
    },
    borderRadius: {
        input: 8,
        card: 8,
        button: 0,
        image: 8
    },
};
