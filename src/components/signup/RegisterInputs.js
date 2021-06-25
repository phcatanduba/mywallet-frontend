import styled from 'styled-components';

export default function LoginInputs({ infos, setInfos, signup }) {
    const [name, email, password, confirmPass] = infos;
    const [setName, setEmail, setPassword, setConfirmPass] = setInfos;

    return (
        <Inputs
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    signup(name, email, password);
                }
            }}
        >
            <input
                placeholder="Nome"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            ></input>
            <input
                placeholder="E-mail"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            ></input>
            <input
                placeholder="Senha"
                value={password}
                type="password"
                autoComplete="new-password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            ></input>
            <input
                type="password"
                placeholder="Confirmar a senha"
                autoComplete="new-password"
                value={confirmPass}
                onChange={(e) => {
                    setConfirmPass(e.target.value);
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
