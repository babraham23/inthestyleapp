import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../../style/typography";

const BasicHeader = () => {
  return (
    <View style={styles.container}>
      <Text color={'black'} fontSize={20} bold center >GEMMA ATKINSON</Text>
    </View>
  );
};

export default BasicHeader;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    justifyContent: 'center',
    paddingTop: 50,
    zIndex: 50,
    elevation: 50,
  },
});
