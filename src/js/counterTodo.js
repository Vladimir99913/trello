import { counterElements } from './dom.js';
import { todos } from './localStorage.js';

const [todo, progress, done] = counterElements;

let countTodo = 0;
let countProgress = 0;
let countDone = 0;
function getCount() {
  countTodo = 0;
  countProgress = 0;
  countDone = 0;
  todos.forEach((todo) => {
    if (todo.status == 'Todo') {
      countTodo++;
    }
    if (todo.status == 'Progress') {
      countProgress++;
    }
    if (todo.status == 'Done') {
      countDone++;
    }
  });
  todo.innerHTML = countTodo;
  progress.innerHTML = countProgress;
  done.innerHTML = countDone;
}

export { getCount, countProgress };
