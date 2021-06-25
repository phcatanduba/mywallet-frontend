import Container from '../Container';
import Title from '../Title';
import Button from '../Button';
import Redirect from '../Redirect';
import RegisterInputs from './RegisterInputs';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const infos = [name, email, password, confirmPass];
    const setInfos = [setName, setEmail, setPassword, setConfirmPass];
    let history = useHistory();

    function checkPassword(password, confirmPass) {
        if (password === confirmPass) {
            return true;
        } else {
            return false;
        }
    }

    function registerRequest(name, email, password) {
        if (checkPassword) {
            const promise = axios.post('http://localhost:4000/sign-up', {
                name,
                email,
                password,
            });
            promise.then((res) => {
                history.push('/');
            });
        } else {
            alert('SENHAS NAO COINCIDEM');
        }
    }
    return (
        <Container>
            <Title title="My Wallet" />
            <RegisterInputs
                infos={infos}
                setInfos={setInfos}
                signup={registerRequest}
            />
            <Button
                onClick={() => {
                    registerRequest(name, email, password);
                }}
            >
                Cadastrar
            </Button>
            <Redirect text="Já tem uma conta? Entre agora!" page="/" />
        </Container>
    );
}
