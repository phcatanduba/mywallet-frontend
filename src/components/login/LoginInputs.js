import styled from 'styled-components';

export default function LoginInputs({ emailArray, passwordArray }) {
    const [email, setEmail] = emailArray;
    const [password, setPassword] = passwordArray;
    return (
        <Inputs>
            <input
                placeholder="E-mail"
                autoComplete="username"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            ></input>
            <input
                type="password"
                placeholder="Senha"
                autoComplete="new-password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            ></input>
        </Inputs>
    );
}

const Inputs = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
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
