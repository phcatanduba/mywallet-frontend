import styled from 'styled-components';

export default function Title({ title }) {
    return <Logo>{title}</Logo>;
}

const Logo = styled.h1`
    font-size: 32px;
    color: #fff;
    font-family: 'Saira Stencil One', cursive;
    margin-bottom: 30px;
`;
