import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import SignIn from './login/SignIn';
import SignUp from './signup/SignUp';
import Home from './home/Home';
import UserContext from '../context/UserContext';
import { useState } from 'react';
import Action from './action/Action';

export default function App() {
    const [infos, setInfos] = useState({});

    return (
        <UserContext.Provider value={{ infos, setInfos }}>
            <GeneralStyles />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <SignIn></SignIn>
                    </Route>
                    <Route path="/sign-up" exact>
                        <SignUp></SignUp>
                    </Route>
                    <Route path="/home" exact>
                        <Home></Home>
                    </Route>
                    <Route path="/action/:type" exact>
                        <Action></Action>
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

const GeneralStyles = createGlobalStyle`
    body {
        font-family: 'Raleway', sans-serif;
    }
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
