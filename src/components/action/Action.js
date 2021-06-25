import { useHistory, useParams } from 'react-router-dom';
import Container from '../Container';
import Header from '../Header';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import styled from 'styled-components';
import Button from '../Button';
import { useState } from 'react';
import axios from 'axios';

export default function Action() {
    const history = useHistory();
    const { type } = useParams();
    const [item, setItem] = useState('');
    const [value, setValue] = useState('');
    let user = localStorage.getItem('userInfo');
    if (!user) {
        history.push('/');
    } else {
        user = JSON.parse(user);
    }

    function sendData() {
        const promise = axios.post(
            `http://localhost:4000/${type}`,
            type === 'credit'
                ? { item, credit: value }
                : { item, debit: value },
            {
                headers: {
                    authorization: `Bearer ${user.token}`,
                },
            }
        );

        promise.then((res) => {
            history.push('/home');
        });

        promise.catch((err) => {
            alert('ERRO AO ENVIAR DADOS');
        });
    }

    return (
        <Container>
            <Header>
                <h1>Nova {type === 'credit' ? 'Entrada' : 'Saída'}</h1>
                <RiLogoutBoxRLine
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        history.push('/home');
                    }}
                ></RiLogoutBoxRLine>
            </Header>
            <Inputs
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        sendData();
                    }
                }}
            >
                <input
                    placeholder={'Valor'}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                ></input>
                <input
                    placeholder={'Descrição'}
                    item={item}
                    onChange={(e) => {
                        setItem(e.target.value);
                    }}
                ></input>
            </Inputs>
            <Button onClick={sendData}>
                {type === 'credit' ? 'Salvar entrada' : 'Salvar saída'}
            </Button>
        </Container>
    );
}

const Inputs = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        margin-bottom: 13px;
        width: 87%;
        height: 58px;
        border-radius: 5px;
        border: none;
        font-size: 20px;
    }
    input::placeholder {
        font-size: 20px;
        padding-left: 10px;
        color: #000;
    }
`;
