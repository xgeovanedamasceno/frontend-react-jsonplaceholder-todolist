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

function UserProfile({ title, subtitle }) {
  const [user, setUser] = useState({});
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState('');

  const params = useParams();

  function fetchUser() {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }

  function saveOnLocalStorage(data) {
    if (data[0] !== undefined) localStorage.setItem(data[0]?.userId, JSON.stringify(data));
  }

  function reduceTodoSize(data) {
    const reducedTodoList = data.slice(0, 5);
    setTodoList(reducedTodoList);
    saveOnLocalStorage(reducedTodoList);
  }

  function fetchTodoList() {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${params.id}`)
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
            <button type="button">Finish Task</button>
          </p>
          <p>
            Status:
          </p>
        </li>
      ))
    );
  }

  function updateTodoList() {
    const savedTodoList = JSON.parse(localStorage.getItem(user?.id));
    const task = {
      userId: user.id,
      title: todoItem,
      completed: false,
    };
    savedTodoList.push(task);
    setTodoList(savedTodoList);
    saveOnLocalStorage(savedTodoList);
  }

  function renderInputForm() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add new task here"
          value={todoItem}
          onChange={(event) => setTodoItem(event.target.value)}
        />
        <button onClick={updateTodoList} type="button">ADD</button>
      </form>
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
          { renderInputForm() }
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
