export default function saveOnLocalStorage(data) {
  if (data[0] !== undefined) localStorage.setItem(data[0]?.userId, JSON.stringify(data));
}
