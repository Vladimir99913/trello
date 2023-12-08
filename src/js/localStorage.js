import { render } from './render.js';
import { getCount } from './counterTodo.js';

let todos = getData();

function setData() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
function getData() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

if (localStorage.getItem('todos')) {
  render();
  getCount();
}

export { setData, todos };
