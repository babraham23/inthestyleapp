import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { UserProvider } from '../context/user.context';
import AccordionScreen from '../screens/Accordion/AccordionScreen';
import BrowseScreen from '../screens/browse/browseScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import StoriesScreen from '../screens/Stories/StoriesScreen';
import { CustomDarkTheme, CustomDefaultTheme } from '../style/themes';
import LinkingConfiguration from './LinkingConfiguration';
import PLP from '../screens/plp'


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
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="BrowseScreen" component={BrowseScreen} options={{ headerShown: false }} />
            <Stack.Screen name="StoriesScreen" component={StoriesScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AccordionScreen" component={AccordionScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PLP" component={PLP} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
