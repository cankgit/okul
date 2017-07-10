import React, { Component } from 'react';
import { StyleSheet, View , Image, Text} from 'react-native';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../images/cankaya_logo.png')}
                    />
                </View>
                <View>
                    <Image
                        style={styles.logoforAcm}
                        source={require('../../images/acm_logo.png')}
                    />
                </View>
                <View style={styles.formContainer}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container : {
     flex : 1,
     backgroundColor : '#115eab',
     alignItems: 'center'
   },
    logoContainer : {
        justifyContent : 'center',margin :100
    },

    logo : {
       width : 180, height : 180
    },
    logoforAcm : {
        alignItems: 'center',
        width: 350,
        height: 150,
        marginLeft : 45,
    },

});