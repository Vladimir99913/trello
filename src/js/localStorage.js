import { render } from './render.js';
import { todos } from './handlers.js';
import { getCount } from './countetTodo.js';

function setData() {
  localStorage.setItem('todos', JSON.stringify(todos));
  console.log(todos);
}
function getData() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

if (localStorage.getItem('todos')) {
  render();
  getCount();
}

export { setData, getData };
