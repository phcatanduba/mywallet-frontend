import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from './login/SignIn';
import SignUp from './signup/SignUp';

export default function App() {
    return (
        <GeneralStyles>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <SignIn></SignIn>
                    </Route>
                    <Route path="/signup">
                        <SignUp></SignUp>
                    </Route>
                </Switch>
            </BrowserRouter>
        </GeneralStyles>
    );
}

const GeneralStyles = styled.div`
    font-family: 'Raleway', sans-serif;
`;
