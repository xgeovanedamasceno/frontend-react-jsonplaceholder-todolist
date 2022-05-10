import { readLocalStorage } from './dataLocalStorage';

export default function getIndexItemTodo(itemTodo) {
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
