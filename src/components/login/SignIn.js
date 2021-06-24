import Title from '../Title';
import LoginInputs from './LoginInputs';
import Button from '../Button';
import Redirect from '../Redirect';
import Container from '../Container';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SignIn() {
    const email = useState('');
    const password = useState('');
    const history = useHistory();

    function login() {
        const promise = axios.get('http://localhost:4000/sign-in', {
            email,
            password,
        });
        promise.then((res) => {
            history.push('/mywallet');
        });

        promise.catch((err) => {
            console.log(err);
        });
    }
    return (
        <Container>
            <Title title="My Wallet" />
            <LoginInputs
                emailArray={email}
                passwordArray={password}
            ></LoginInputs>
            <Button onClick={login}>Entrar</Button>
            <Redirect text="Primeira vez? Cadastre-se!" page="/sign-up" />
        </Container>
    );
}
