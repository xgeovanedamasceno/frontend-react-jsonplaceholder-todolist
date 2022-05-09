import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Page from '../../components/Page';
import PageName from '../../components/PageName';
import User from '../../components/User';
import TodoList from '../../components/TodoList';
import { saveOnLocalStorage, readLocalStorage } from '../../util/dataLocalStorage';

function UserProfile({ pageName }) {
  const [user, setUser] = useState({});
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState('');
  const [updatedItem, setUpdatedItem] = useState('');
  const [statusItem, setStatusItem] = useState(null);

  const params = useParams();

  function fetchUser() {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }

  function fetchTodoList() {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setTodoList(data);
        saveOnLocalStorage(data);
      });
  }

  useEffect(() => {
    fetchUser();
    fetchTodoList();
  }, []);

  function renderUser() {
    return (
      <User>
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
      </User>
    );
  }

  function addTodoItem() {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        userId: user.id,
        title: todoItem,
        completed: false,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const listStoraged = readLocalStorage(user.id);
        listStoraged.unshift(json);
        setTodoList(listStoraged);
        saveOnLocalStorage(listStoraged);
        setTodoItem('');
      });
  }

  function getIdTodoItem(itemTodo) {
    const { userId, id } = itemTodo;
    const listStoraged = readLocalStorage(userId);
    let indexItem;

    listStoraged.forEach((itemStorage, index) => {
      if (itemStorage.id === id) {
        indexItem = index;
      }
      return null;
    });
    return indexItem;
  }

  useEffect(() => {
    if (updatedItem) {
      const indexTodoItem = getIdTodoItem(updatedItem);
      const listStoraged = readLocalStorage(updatedItem.userId);
      listStoraged[indexTodoItem] = updatedItem;
      setTodoList(listStoraged);
      saveOnLocalStorage(listStoraged);
      setStatusItem(updatedItem.completed);
    }
  }, [updatedItem]);

  function updateStatusTodoItem(itemId, status) {
    console.log(status);
    fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: status,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUpdatedItem(data);
      });
  }

  function finishTask(event) {
    const itemId = +event.target.name;
    updateStatusTodoItem(itemId, true);
  }

  function pendingTask(event) {
    const itemId = +event.target.id;
    updateStatusTodoItem(itemId, false);
  }

  function renderInputForm() {
    return (
      <form>
        <input
          type="text"
          value={todoItem}
          onChange={(event) => setTodoItem(event.target.value)}
          placeholder="Add new task here"
        />
        <button onClick={addTodoItem} type="button">ADD</button>
      </form>
    );
  }

  function renderTodoList() {
    return (
      todoList?.map((itemList, index) => (
        <li key={`${itemList?.id}${itemList.id + index}`}>
          <section id="task-description">
            <p>
              {itemList.title}
            </p>
            <p>
              status:
              {' '}
              {statusItem ? `${itemList.completed}` : `${itemList.completed}`}
            </p>
          </section>
          <section id="buttons-sec">
            <button type="button" onClick={pendingTask} name={itemList.id}>Mark as Pending</button>
            <button type="button" onClick={finishTask} name={itemList.id}>Finish Task</button>
          </section>
        </li>
      ))
    );
  }

  return (
    <Page>
      <PageName title={pageName} />
      { renderUser() }
      { renderInputForm() }
      <TodoList>
        { renderTodoList() }
      </TodoList>
    </Page>
  );
}

UserProfile.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default UserProfile;
