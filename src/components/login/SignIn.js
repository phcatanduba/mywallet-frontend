import Title from '../Title';
import LoginInputs from './LoginInputs';
import Button from '../Button';
import Redirect from '../Redirect';
import Container from '../Container';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function SignIn() {
    const email = useState('');
    const password = useState('');
    const history = useHistory();
    const user = useContext(UserContext);

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo) {
            user.setInfos(userInfo);
            history.push('/home');
        } else {
            history.push('/');
        }
    }, []);

    function login(email, password) {
        const promise = axios.post('http://localhost:4000/sign-in', {
            email,
            password,
        });
        promise.then((res) => {
            user.setInfos(res.data);
            history.push('/home');
            localStorage.setItem('userInfo', JSON.stringify(res.data));
        });

        promise.catch(({ response }) => {
            if (response.status === 400) {
                alert('USUARIO OU SENHA INCORRETOS');
            }
        });
    }
    return (
        <Container>
            <Title title="My Wallet" />
            <LoginInputs
                emailArray={email}
                passwordArray={password}
                login={login}
            ></LoginInputs>
            <Button
                onClick={() => {
                    login(email[0], password[0]);
                }}
            >
                Entrar
            </Button>
            <Redirect text="Primeira vez? Cadastre-se!" page="/sign-up" />
        </Container>
    );
}
