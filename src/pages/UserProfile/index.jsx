import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Container from '../../components/Container';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Subtitle from '../../components/Subtitle';
import User from '../../components/User';
import TodoList from '../../components/TodoList';
import Button from '../../components/Button';

function UserProfile({ title, subtitle }) {
  const [user, setUser] = useState(null);
  const [todoList, setTodoList] = useState([]);

  const params = useParams();

  function fetchUser() {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }

  function reduceTodoSize(data) {
    const reducedTodoList = data.slice(0, 5);
    setTodoList(reducedTodoList);
  }

  function fetchTodoList() {
    fetch(`https://jsonplaceholder.typicode.com/todos?userid=${params.id}`)
      .then((response) => response.json())
      .then((data) => reduceTodoSize(data));
  }

  useEffect(() => {
    fetchUser();
    fetchTodoList();
    setTodoList(reduceTodoSize);
  }, []);

  function renderUser() {
    return (
      <User>
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
      </User>
    );
  }

  function renderTodoList() {
    return (
      todoList?.map((itemList, index) => (
        <li key={`${itemList?.id}${itemList.id + index}`}>
          <p>
            {itemList.title}
          </p>
          <p>
            Status:
          </p>
        </li>
      ))
    );
  }

  return (
    <Container>
      <Header>
        <Title title={title} />
      </Header>
      <Main>
        <Subtitle subtitle={subtitle} />
        { renderUser() }
        <TodoList>
          <Button label="Add New Task" />
          { renderTodoList() }
        </TodoList>
      </Main>
      <Footer>
        <Subtitle subtitle={subtitle} />
      </Footer>
    </Container>
  );
}

UserProfile.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default UserProfile;
