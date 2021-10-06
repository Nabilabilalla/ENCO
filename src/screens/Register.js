import React from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, Text, View } from "react-native";

const Register = () => {


    return ( <
        SafeAreaView style = {
            {
                justifyContent: 'center',
                alignItems: 'center',
            }
        } >
        {
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
        View style = { styles.fixToText } >
        <
        TextInput style = { styles.input2 }
        placeholder = "Nom" /
        >
        <
        TextInput style = { styles.input2 }
        placeholder = "Prénom"
        keyboardType = "numeric" /
        >
        <
        /View> <
        View style = { styles.fixToText } >
        <
        TextInput style = { styles.input2 }
        placeholder = "Ville" /
        >
        <
        TextInput style = { styles.input2 }
        placeholder = "Code postal"
        keyboardType = "numeric" /
        >
        <
        /View> <
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
        } > S 'inscrire</Text> <
        /TouchableOpacity> {
            /* <Button
                  style={styles.Button}
                    color="#0400B2"
                    title="Connexion"
                    onPress={() => Alert.alert('Simple Button pressed')}
                  /> */
        } <
        Text style = { styles.baseText } >
        Connexion <
        /Text> <
        Text style = { styles.Text } >
        Mot de passe oublié ?
        <
        /Text> <
        /SafeAreaView>
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
    input2: {
        height: 40,
        width: 90,
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
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Register;