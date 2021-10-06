import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Image, Text } from "react-native";

const Login = () => {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);


    return ( <
        SafeAreaView style = {
            {
                justifyContent: 'center',
                alignItems: 'center',
            }
        } > {
            /* <Text style={styles.baseText}>
                  Connexion
                </Text> */
        } <
        Image style = { styles.logo }
        source = {
            {
                uri: 'https://zupimages.net/up/21/40/psh2.png',
            }
        }
        /> <
        TextInput style = { styles.input }
        onChangeText = { onChangeText }
        value = { text }
        placeholder = "E-mail" /
        >
        <
        TextInput style = { styles.input }
        onChangeText = { onChangeNumber }
        value = { number }
        placeholder = "mot de passe"
        keyboardType = "numeric" /
        >
        <
        Button style = { styles.Button }
        color = "#0400B2"
        title = "Connexion"
        onPress = {
            () => Alert.alert('Simple Button pressed')
        }
        /> <
        Text style = { styles.baseText } >
        S 'inscrire < /
        Text > <
        Text style = { styles.Text } >
        Mot de passe oublié ?
        <
        /Text> < /
        SafeAreaView >
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: 'blue',
        padding: 10,
    },
    logo: {
        width: 190,
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
    },
    baseText: {
        color: '#0400B2',
        fontWeight: 'bold',
        padding: 10,
    },
    Text: {
        color: '#0400B2',
        padding: 50,
        marginRight: 60,
    }
});

export default Login;