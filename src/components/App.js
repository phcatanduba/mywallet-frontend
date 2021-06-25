import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from './login/SignIn';
import SignUp from './signup/SignUp';
import Home from './home/Home';
import UserContext from '../context/UserContext';
import { useState } from 'react';

export default function App() {
    const [infos, setInfos] = useState({});

    return (
        <UserContext.Provider value={{ infos, setInfos }}>
            <GeneralStyles>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <SignIn></SignIn>
                        </Route>
                        <Route path="/sign-up">
                            <SignUp></SignUp>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </GeneralStyles>
        </UserContext.Provider>
    );
}

const GeneralStyles = styled.div`
    font-family: 'Raleway', sans-serif;
`;
