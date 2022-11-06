import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BorderButton from '../../components/buttons/borderButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation: any = useNavigation();
    return (
        <View style={[styles.container, { backgroundColor: 'black' }]}>
            <BorderButton title="PLP" onPress={() => navigation.navigate('PLP')} style={styles.buttonPadding} />
            <BorderButton title="Accordion Screen" onPress={() => navigation.navigate('AccordionScreen')} style={styles.buttonPadding} />
            <BorderButton title="Stories Screen" onPress={() => navigation.navigate('StoriesScreen')} style={styles.buttonPadding} />
            <BorderButton title="Technical Test" onPress={() => navigation.navigate('BrowseScreen')} style={styles.buttonPadding} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 80,
    },
    buttonPadding: {
        marginTop: 30,
    },
});
