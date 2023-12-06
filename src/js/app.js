// import * as bootstrap from 'bootstrap';

import { getTime } from './clock.js';
import { getUser } from './users.js';
import { getCount } from './counterTodo.js';
import {
  ulTodoElement,
  ulProgressElement,
  ulDoneElement,
  selectUserElement,
  selectEditUserElement,
  formElementAdd,
  sectionTodoElement,
  sectionProgressElement,
  sectionDoneElement,
  btnDeleteAllDoneElement,
  btnDeleteAllElement,
} from './dom.js';
import { handleClickBtnSave, handleChangeSelectStatus, handleClickBtnDelete, handleClickBtnDeleteAllDone } from './handlers.js';

function buildTemplateTodo(todo) {
  let className = '';
  let liElementColor = '';
  if (todo.status == 'Todo') {
    className = 'todo__ul__li';
    liElementColor = todo.bgColor;
  } else if (todo.status == 'Progress') {
    className = 'in-progress__ul__li';
    // liElementColor = 'rgb(167, 167, 167)';
  } else if (todo.status == 'Done') {
    className = 'done__ul__li';
    // liElementColor = 'rgb(115, 180, 226)';
  }
  return `
  <li id="${todo.id}" class="${className}" style="background-color:${liElementColor};">
  <h6>${todo.title}</h6>
  <p>${todo.description}</p>
  <div class="wrapper">
    <p>${todo.user}</p>
    <time>${todo.createdAt}</time>
  </div>
  <div class="btn__group">
    <button class="btn__group__btn-edit" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-2">Edit</button>
    <button class="btn__group__btn-delete">Delete</button>
    <select class="btn__group__status" >
      <option>Open</option>
      <option>Todo</option>
      <option>Progress</option>
      <option>Done</option>
    </select>
  </div>
</li>
  `;
}
const timer = setInterval(getTime, 1000);

getUser(selectUserElement);
getUser(selectEditUserElement);

formElementAdd.addEventListener('submit', handleClickBtnSave);

sectionTodoElement.addEventListener('change', handleChangeSelectStatus);
sectionProgressElement.addEventListener('change', handleChangeSelectStatus);
sectionDoneElement.addEventListener('change', handleChangeSelectStatus);

ulTodoElement.addEventListener('click', handleClickBtnDelete);
ulProgressElement.addEventListener('click', handleClickBtnDelete);
ulDoneElement.addEventListener('click', handleClickBtnDelete);

sectionTodoElement.addEventListener('change', getCount);
sectionProgressElement.addEventListener('change', getCount);
sectionDoneElement.addEventListener('change', getCount);

btnDeleteAllElement.addEventListener('click', handleClickBtnDeleteAllDone);

export { buildTemplateTodo };
