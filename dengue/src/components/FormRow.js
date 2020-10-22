import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormRow = (props) => {
    const { children } = props;

    return (
        <View style={StyleSheet.login}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    login: {
        width: '90%',
        marginBottom: 15,
        color: '#333',
        fontSize: 17,
        borderRadius: 7,
      
    }
});

export default FormRow;