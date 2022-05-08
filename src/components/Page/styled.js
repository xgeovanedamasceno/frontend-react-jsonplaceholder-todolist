import styled from 'styled-components';

const MainStyle = styled.main`
form {
    border: 1px solid #e0e0e0;
    width: 700px;
    padding: 20px;
}

input {
    padding: 5px;
    margin-right: 20px;
    width: 590px;
}

button {
    padding: 5px 20px;
}

@media(max-width: 912px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 830px;
}

@media(max-width: 820px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 770px;
}

@media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 700px;
}

@media(max-width: 540px) {
    width: 480px;
}

@media(max-width: 415px) {
    width: 350px;

    form {
        width: 350px;
    }

    input {
        width: 340px;
    }

    form > button {
        margin-top: 10px;
        width: 100px;
    }
}

@media(max-width: 395px) {
    width: 330px;

    form {
        width: 320px;
    }

    input {
        width: 300px;
    }

    form > button {
        margin-top: 10px;
        width: 100px;
    }
}

@media(max-width: 375px) {
    width: 310px;

    form {
        width: 310px;
    }

    input {
        width: 300px;
    }
}

@media(max-width: 280px) {
    width: 210px;
}

`;

export default MainStyle;
