import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import Color from '../constants/Color';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText} >{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        color: 'black',
        fontSize: 18,
    }
})

export default Header;