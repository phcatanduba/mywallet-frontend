import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '../Container';
import {
    RiLogoutBoxRLine,
    RiAddCircleLine,
    RiIndeterminateCircleLine,
} from 'react-icons/ri';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import Header from '../Header';
import dayjs from 'dayjs';

export default function Home() {
    const [balance, setBalance] = useState([]);
    const history = useHistory();
    let user = localStorage.getItem('userInfo');
    if (!user) {
        history.push('/');
    } else {
        user = JSON.parse(user);
    }

    useEffect(() => {
        getBalance();
    }, []);

    function getBalance() {
        const promise = axios.get('http://localhost:4000/balance', {
            headers: {
                authorization: `Bearer ${user ? user.token : ''}`,
            },
        });

        promise.then((res) => {
            setBalance(res.data);
        });

        promise.catch((err) => {
            localStorage.removeItem('userInfo');
            history.push('/');
        });
    }

    function logout() {
        const promise = axios.post(
            'http://localhost:4000/logout',
            {},
            {
                headers: {
                    authorization: `Bearer ${user.token}`,
                },
            }
        );
        promise.then((res) => {
            localStorage.removeItem('userInfo');
            history.push('/');
        });

        promise.catch((res) => {
            console.log(res);
            localStorage.removeItem('userInfo');
            history.push('/');
        });
    }
    let total = 0;
    return (
        <Container>
            <Header>
                <h1>Olá, {user.name}</h1>
                <RiLogoutBoxRLine
                    style={{ cursor: 'pointer' }}
                    onClick={logout}
                ></RiLogoutBoxRLine>
            </Header>
            <Balance>
                {balance.length === 0 ? (
                    <p>Não há registros de entrada ou saída</p>
                ) : (
                    <ul>
                        {balance.map((b) => {
                            let type;
                            if ('credit' in b) {
                                type = 'credit';
                                total += b[type];
                            } else {
                                type = 'debit';
                                total -= b[type];
                            }
                            return (
                                <li key={b.id}>
                                    <Box>
                                        <span className={'date'}>
                                            {dayjs(b.date).format('DD/MM')}
                                        </span>
                                        <span className={'name'}>{b.item}</span>
                                    </Box>
                                    <span className={type}>
                                        {b[type] / 100}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                )}
                <div className={'total-box'}>
                    <div className={'total'}>SALDO</div>
                    <div className={total > 0 ? 'credit' : 'debit'}>
                        {total / 100}
                    </div>
                </div>
            </Balance>
            <ActionsBox>
                <Link className="action-box" to="/action/credit">
                    <RiAddCircleLine></RiAddCircleLine>
                    <p>
                        Nova
                        <br />
                        Entrada
                    </p>
                </Link>
                <Link className="action-box" to="/action/debit">
                    <RiIndeterminateCircleLine></RiIndeterminateCircleLine>
                    <p>
                        Nova
                        <br />
                        Saida
                    </p>
                </Link>
            </ActionsBox>
        </Container>
    );
}

const Balance = styled.div`
    background-color: white;
    width: 90%;
    height: 450px;
    border-radius: 5px;
    color: #868686;
    font-size: 20px;
    position: relative;

    p {
        display: flex;
        align-items: center;
        height: 100%;
        width: 50%;
        margin: 0 auto;
    }
    ul {
        padding-top: 25px;
    }

    li {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        width: 90%;
        justify-content: space-between;
        font-size: 16px;
        margin-bottom: 30px;
    }

    .date {
        color: #c6c6c6;
    }
    .name {
        color: #000;
    }
    .credit {
        color: #03ac00;
    }
    .debit {
        color: #c70000;
    }

    .total-box {
        display: flex;
        width: 90%;
        justify-content: space-between;
        position: absolute;
        bottom: 10px;
        right: 5%;
        .total {
            font-weight: bold;
            color: #000;
            font-size: 17px;
        }
    }
`;

const Box = styled.span`
    display: flex;
    span {
        &:first-child {
            margin-right: 5px;
        }
    }
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
        text-decoration: none;
        font-weight: bold;
    }
`;
