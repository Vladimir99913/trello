import { todos } from './handlers.js';
import { buildTemplateTodo } from './app.js';
import { ulTodoElement, ulProgressElement, ulDoneElement } from './dom.js';
function render() {
  let htmlTodo = '';
  let htmlProgress = '';
  let htmlDone = '';
  const cloneTodos = structuredClone(todos);
  // cloneTodos.reverse();
  cloneTodos.forEach((todo) => {
    if (todo.status == 'Todo') {
      const templateTodo = buildTemplateTodo(todo);
      htmlTodo += templateTodo;
    } else if (todo.status == 'Progress') {
      const templateProgress = buildTemplateTodo(todo);
      htmlProgress += templateProgress;
    } else if (todo.status == 'Done') {
      const templateDone = buildTemplateTodo(todo);
      htmlDone += templateDone;
    }
  });

  ulTodoElement.innerHTML = htmlTodo;
  ulProgressElement.innerHTML = htmlProgress;
  ulDoneElement.innerHTML = htmlDone;
}

export { render };
