import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Page from '../../components/Page';
import Subtitle from '../../components/Subtitle';
import User from '../../components/User';
import TodoList from '../../components/TodoList';

function UserProfile({ subtitle }) {
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

  function readLocalStorage() {
    return JSON.parse(localStorage.getItem(user.id));
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

  function renderStatusItemTodo(status) {
    switch (status) {
      case true:
        return 'completed';
      case 'pending':
        return status;
      default:
        return 'incomplet';
    }
  }

  function addTodoItem() {
    const listStoraged = readLocalStorage();
    const lastId = listStoraged.at(-1);
    const taskItem = {
      userId: user.id,
      id: lastId.id + 1,
      title: todoItem,
      completed: false,
    };
    listStoraged.unshift(taskItem);
    setTodoList(listStoraged);
    saveOnLocalStorage(listStoraged);
  }

  function getIdTodoItem(itemID) {
    const listStoraged = readLocalStorage();
    let indexItem;

    listStoraged.forEach((itemTask, index) => {
      if (itemTask.id === itemID) {
        indexItem = index;
      }
      return null;
    });
    return indexItem;
  }

  function updateStatusTodoItem(itemId, status) {
    const listStoraged = readLocalStorage();
    const indexTodoItem = getIdTodoItem(itemId);
    const itemTodoTask = listStoraged.at(indexTodoItem);
    const taskItem = {
      userId: itemTodoTask.userId,
      id: itemTodoTask.id,
      title: itemTodoTask.title,
      completed: status,
    };
    listStoraged[indexTodoItem] = taskItem;
    setTodoList(listStoraged);
    saveOnLocalStorage(listStoraged);
  }

  function finishTask(event) {
    const itemId = +event.target.id;
    updateStatusTodoItem(itemId, true);
  }

  function pendingTask(event) {
    const itemId = +event.target.id;
    updateStatusTodoItem(itemId, 'pending');
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
        <button onClick={addTodoItem} type="button">ADD</button>
      </form>
    );
  }

  function renderTodoList() {
    return (
      todoList?.map((itemList, index) => (
        <li key={`${itemList?.id}${itemList.id + index}`}>
          <p>
            {itemList.title}
            <button type="button" onClick={pendingTask} id={itemList.id}>Mark as Pending</button>
            <button type="button" onClick={finishTask} id={itemList.id}>Finish Task</button>

          </p>
          <p>
            Status:
            {' '}
            {renderStatusItemTodo(itemList.completed)}
          </p>
        </li>
      ))
    );
  }

  return (
    <Page>
      <Subtitle subtitle={subtitle} />
      { renderUser() }
      <TodoList>
        { renderInputForm() }
        { renderTodoList() }
      </TodoList>
    </Page>
  );
}

UserProfile.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default UserProfile;
