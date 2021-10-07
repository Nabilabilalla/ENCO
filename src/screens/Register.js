import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, Text, View } from "react-native";

// API
const URL_LOGIN = "http://api.pote.dev/users";

const enviarData = async(url, data) => {

    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const json = await resp.json();

    return json;

}

const Register = (props) => {
    let history = useHistory();
    const [error, setError] = useState(null);
    const firstname = useRef(null);
    const lastname = useRef(null);
    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleLogin = async() => {
        const data = {
            "firstname": firstname.current.value,
            "lastname": lastname.current.value,
            "username": username.current.value,
            "email": email.current.value,
            "password": password.current.value,
        };
        console.log(data);
        const respuestaJson = await enviarData(URL_LOGIN, data);

        console.log("Bien connecté", respuestaJson);

        props.acceder(respuestaJson);
        setError(respuestaJson.error);


    }
    return ( <
        SafeAreaView style = {
            {
                justifyContent: 'center',
                alignItems: 'center',
            }
        } >
        <
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
        ref = { firstname }
        placeholder = "Nom" / >
        <
        TextInput style = { styles.input2 }
        ref = { lastname }
        placeholder = "Prénom" / >
        <
        /View>  <
        TextInput style = { styles.input }
        ref = { username }
        placeholder = "username" / >
        <
        TextInput style = { styles.input }
        ref = { email }
        placeholder = "E-mail" / >
        <
        TextInput style = { styles.input }
        ref = { password }
        placeholder = "mot de passe" / >
        <
        TouchableOpacity style = { styles.button } >
        <
        Text onClick = { handleLogin }
        style = {
            {
                color: '#0400B2'
            }
        } > S 'inscrire</Text>  <
        /TouchableOpacity>  <
        Text style = { styles.baseText }
        onClick = {
            () => { history.push("/"); } } > Connexion < /Text>  <
        Text style = { styles.Text }
        onClick = {
            () => { history.push("/Password"); } } > Mot de passe oublié ?
        <
        /Text> </SafeAreaView >
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