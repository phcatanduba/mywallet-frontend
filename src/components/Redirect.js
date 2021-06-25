import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Redirect({ text, page }) {
    return (
        <Link to={page}>
            <TextRedirect>{text}</TextRedirect>
        </Link>
    );
}

const TextRedirect = styled.div`
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`;
