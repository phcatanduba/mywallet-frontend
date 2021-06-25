import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Container from '../Container';
import {
    RiLogoutBoxRLine,
    RiAddCircleLine,
    RiIndeterminateCircleLine,
} from 'react-icons/ri';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function Home({ setInfos }) {
    const [balance, setBalance] = useState([]);
    const { name, token } = JSON.parse(localStorage.getItem('userInfo'));
    const history = useHistory();

    useEffect(() => {
        getBalance();
    }, []);

    function getBalance() {
        const promise = axios.get('http://localhost:4000/balance', {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        promise.then((res) => {
            setBalance(res.data);
        });

        promise.catch((err) => {
            history.push('/');
        });
    }

    return (
        <Container>
            <Header>
                <h1>Olá, Fulano</h1>
                <RiLogoutBoxRLine></RiLogoutBoxRLine>
            </Header>
            <Balance>
                {balance.length === 0
                    ? 'Não há registros de entrada ou saída'
                    : balance.map(() => {})}
            </Balance>
            <ActionsBox>
                <button className="action-box">
                    <RiAddCircleLine></RiAddCircleLine>
                    <p>
                        Nova
                        <br />
                        Entrada
                    </p>
                </button>
                <button className="action-box">
                    <RiIndeterminateCircleLine></RiIndeterminateCircleLine>
                    <p>
                        Nova
                        <br />
                        Saida
                    </p>
                </button>
            </ActionsBox>
        </Container>
    );
}

const Header = styled.header`
    color: white;
    display: flex;
    width: 90%;
    justify-content: space-between;
    font-size: 26px;
    margin-bottom: 22px;
`;

const Balance = styled.div`
    background-color: white;
    width: 90%;
    height: 450px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #868686;
    font-size: 20px;
`;

const ActionsBox = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    .action-box {
        background-color: #a328d6;
        color: white;
        height: 114px;
        font-size: 20px;
        width: 45%;
        padding-left: 8px;
        margin-top: 15px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border: none;
        cursor: pointer;
    }
`;
