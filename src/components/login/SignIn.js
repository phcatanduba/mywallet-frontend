import Title from '../Title';
import LoginInputs from './LoginInputs';
import Button from '../Button';
import Redirect from '../Redirect';
import Container from '../Container';

export default function SignIn() {
    return (
        <Container>
            <Title title="My Wallet" />
            <LoginInputs></LoginInputs>
            <Button>Entrar</Button>
            <Redirect text="Primeira vez? Cadastre-se!" page="/signup" />
        </Container>
    );
}
