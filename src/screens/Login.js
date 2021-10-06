import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Image, Text } from "react-native";

const Login = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

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
        TextInput style = { styles.input }
        onChangeText = { onChangeText }
        value = { text }
        /> <
        TextInput style = { styles.input }
        onChangeText = { onChangeNumber }
        value = { number }
        placeholder = "useless placeholder"
        keyboardType = "numeric" /
        >
        <
        Button color = "#0400B2"
        title = "Connexion"
        onPress = {
            () => Alert.alert('Simple Button pressed') }
        /> <
        /SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    logo: {
        width: 190,
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
    },
    //   baseText:{
    //     marginRight: 120,
    //     color: '#0400B2',
    //     fontWeight: 'bold'
    //   }
});

export default Login;