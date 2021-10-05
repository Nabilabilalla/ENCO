import react from 'react';
import { InnerContainer, StyledContainer, PageLogo, PageTitle } from './../components/styles'

const Login = () => {
    return ( <
        StyledContainer >
        <
        InnerContainer >
        <
        PageLogo resizMode = "cover"
        source = { require('./../assets/ENCO.png') }
        /> <
        PageTitle > Flower Crib < /PageTitle> <
        /InnerContainer> <
        /StyledContainer>
    );
}

export default Login;