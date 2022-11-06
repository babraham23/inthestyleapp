import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Accordion from '../../components/accordion/Accordion';
import AccordionWithIcon from '../../components/accordion/AccordionWithIcon';
import AccordionITS from '../../components/accordion/AccordionITS';

const AccordionScreen = () => {
    return (
        <View style={styles.container}>
            <Accordion />
            <AccordionWithIcon />
            <AccordionITS title='title' content={'Content'} />
        </View>
    );
};

export default AccordionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
