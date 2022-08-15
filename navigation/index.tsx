import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { UserProvider } from '../context/user.context';
import BrowseScreen from '../screens/browse/browseScreen';
import { CustomDarkTheme, CustomDefaultTheme } from '../style/themes';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme}>
            <UserProvider>
                <RootNavigator />
            </UserProvider>
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<any>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BrowseScreen" component={BrowseScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
