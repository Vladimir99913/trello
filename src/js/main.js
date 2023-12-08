import { getTime, date } from './clock.js';
import { getUser } from './users.js';
import { getCount } from './counterTodo.js';
import {
  ulContainerElements,
  selectUserElement,
  selectEditUserElement,
  formElementAdd,
  sectionTodoElement,
  sectionProgressElement,
  sectionDoneElement,
  btnDeleteAllDoneElement,
  formElementEdit,
} from './dom.js';
import {
  handleClickBtnSave,
  handleClickBtnSaveEdit,
  handleChangeSelectStatus,
  handleClickBtnDelete,
  handleClickBtnEdit,
  handleClickBtnDeleteAllDone,
  handleMouseDownTodo,
  DragOver,
  DragDrop,
} from './handlers.js';

const [ulTodo, ulInProgress, ulDone] = ulContainerElements;

function buildTemplateTodo(todo) {
  let className = '';
  let liElementColor = '';
  if (todo.status == 'Todo') {
    className = 'todo__ul__li';
    liElementColor = todo.bgColor;
  } else if (todo.status == 'Progress') {
    className = 'in-progress__ul__li';
  } else if (todo.status == 'Done') {
    className = 'done__ul__li';
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
    <button class="btn__group__btn-edit" type="button" data-bs-toggle="modal" data-bs-target="#TodoEditModal">Edit</button>
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

class Todo {
  id = Date.now();
  createdAt = date.toLocaleTimeString();
  status = 'Todo';
  constructor(formData) {
    this.title = formData.get('title');
    this.description = formData.get('description');
    this.user = formData.get('user');
    this.bgColor = formData.get('bgColor');
  }
}

const timer = setInterval(getTime, 1000);

getUser(selectUserElement);
getUser(selectEditUserElement);

formElementAdd.addEventListener('submit', handleClickBtnSave);
formElementEdit.addEventListener('submit', handleClickBtnSaveEdit);

sectionTodoElement.addEventListener('change', handleChangeSelectStatus);
sectionProgressElement.addEventListener('change', handleChangeSelectStatus);
sectionDoneElement.addEventListener('change', handleChangeSelectStatus);

ulTodo.addEventListener('click', handleClickBtnEdit);
ulInProgress.addEventListener('click', handleClickBtnEdit);
ulDone.addEventListener('click', handleClickBtnEdit);

ulTodo.addEventListener('click', handleClickBtnDelete);
ulInProgress.addEventListener('click', handleClickBtnDelete);
ulDone.addEventListener('click', handleClickBtnDelete);

// sectionTodoElement.addEventListener('change', getCount);
// sectionProgressElement.addEventListener('change', getCount);
// sectionDoneElement.addEventListener('change', getCount);

btnDeleteAllDoneElement.addEventListener('click', handleClickBtnDeleteAllDone);

ulTodo.addEventListener('mousedown', handleMouseDownTodo);
ulInProgress.addEventListener('mousedown', handleMouseDownTodo);
ulDone.addEventListener('mousedown', handleMouseDownTodo);

DragOver();
DragDrop();

export { buildTemplateTodo, Todo };
