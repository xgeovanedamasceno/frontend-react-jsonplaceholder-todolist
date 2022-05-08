import styled from 'styled-components';

const ContainerStyle = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 1000px;
margin: 0 auto;
background-color: f7f7f7;

h1, h2 {
    color: #1C1D1F;
}

a {
    text-decoration: none;
    color: #1A1B1C;
}

a:hover {
    color: #F5CF00;
}

font-family: monospace;
`;

export default ContainerStyle;
