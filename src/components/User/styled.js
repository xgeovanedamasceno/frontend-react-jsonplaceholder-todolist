import styled from 'styled-components';

const UserStyle = styled.section`
padding: 10px 20px 10px 20px;
margin-top: 10px;
margin-bottom: 10px;
border: 1px solid #e0e0e0;
width: 700px;

@media(max-width: 912px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 830px;

    form {
        width: 880px;
    }

    input {
        width: 340px;
    }

}

@media(max-width: 820px) {
    width: 770px;

    form {
        width: 830px;
    }

    input {
        width: 830px;
    }
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
}

@media(max-width: 395px) {
    width: 330px;
}

@media(max-width: 375px) {
    width: 310px;
}

@media(max-width: 280px) {
    width: 210px;
}
`;

export default UserStyle;
