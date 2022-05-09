export function saveOnLocalStorage(data) {
  if (data[0] !== undefined) localStorage.setItem(data[0]?.userId, JSON.stringify(data));
}

export function readLocalStorage(userID) {
  return JSON.parse(localStorage.getItem(userID));
}
