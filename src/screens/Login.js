import React from "react";
import { useHistory } from "react-router-dom";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, Text } from "react-native";

const Login = () => {
    let history = useHistory();

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
        placeholder = "E-mail" /
        >
        <
        TextInput style = { styles.input }
        placeholder = "mot de passe"
        keyboardType = "numeric" /
        >
        <
        TouchableOpacity style = { styles.button } >
        <
        Text style = {
            {
                color: '#0400B2'
            }
        }
        onClick = {
            () => { history.push("/Home"); }
        } > Connexion < /Text> < /
        TouchableOpacity > {
            /* <Button
                  style={styles.Button}
                    color="#0400B2"
                    title="Connexion"
                    onPress={() => Alert.alert('Simple Button pressed')}
                  /> */
        } <
        Text style = { styles.baseText }
        onClick = {
            () => { history.push("/Register"); }
        } >
        S 'inscrire < /
        Text > <
        Text style = { styles.Text }
        onClick = {
            () => { history.push("/Password"); }
        } >
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
        borderColor: '#0400B2',
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
        marginRight: 55,
    },
    button: {
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#7ED957',
        padding: 10
    },
});

export default Login;