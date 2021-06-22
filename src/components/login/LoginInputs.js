import styled from 'styled-components';

export default function LoginInputs() {
    return (
        <Inputs>
            <input placeholder="E-mail"></input>
            <input placeholder="Senha"></input>
        </Inputs>
    );
}

const Inputs = styled.div`
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
