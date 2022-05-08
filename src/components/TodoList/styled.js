import styled from 'styled-components';

const TodoListStyle = styled.ul`
border: 1px solid #e0e0e0;
width: 800px;
margin-top: 15px;
padding: 30px;
padding-top: 10px;

#task-description {
    
}

#buttons-sec {
    margin-bottom: 20px;
}

button {
    margin-right: 10px;
}

li {
    border-bottom: 1px solid #E5E5E5;
    margin-bottom: 40px;
}

@media(max-width: 912px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 820px;
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
    width: 650px;
}

@media(max-width: 540px) {
    width: 460px;
}

@media(max-width: 415px) {
    width: 330px;
}

@media(max-width: 395px) {
    width: 300px;
}

@media(max-width: 375px) {
    width: 290px;
}

@media(max-width: 360px) {
    width: 270px;

    button {
        margin-bottom: 10px;
    }
}

@media(max-width: 280px) {
    width: 210px;
}
`;

export default TodoListStyle;
