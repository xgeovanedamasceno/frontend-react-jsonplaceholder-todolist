import styled from 'styled-components';

const ContainerStyle = styled.div`
padding: 10px;
margin: 0 auto;
width: 900px;
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

footer > h2 {
    font-size: 14px;
}

@media(max-width: 800px) {
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100vw;
}
`;

export default ContainerStyle;
