import { todos } from './localStorage.js';
import { getCount, countProgress } from './counterTodo.js';
import { setData } from './localStorage.js';
import { render } from './render.js';
import { Todo } from './main.js';
import {
  inputTitleElement,
  textareaDescriptionElement,
  selectUserElement,
  inputColorElement,
  inputEditTitleElement,
  textareaEditDescriptionElement,
  selectEditUserElement,
  inputEditColorElement,
  formElementAdd,
  modalError,
  ulContainerElements,
} from './dom.js';
let todoEditId = 0;

function handleClickBtnSave(event) {
  event.preventDefault();
  const formData = new FormData(formElementAdd);
  const todo = new Todo(formData);
  todos.push(todo);
  render();
  getCount();
  setData();
  textareaDescriptionElement.value = '';
  inputTitleElement.value = '';
  selectUserElement.value = '';
  inputColorElement.value = '#e2d2f9';
}

function handleChangeSelectStatus(event) {
  if (event.target.tagName === 'SELECT') {
    const liElement = event.target.closest('li');
    if (event.target.value == 'Progress' && countProgress == 6) {
      modalError.show();
    } else {
      todos.forEach((todo) => {
        if (todo.id == liElement.getAttribute('id')) {
          todo.status = event.target.value;
        }
      });
    }
  }
  render();
  setData();
  getCount();
}

function handleClickBtnDelete(event) {
  if (event.target.tagName === 'BUTTON') {
    const btn = event.target;
    if (btn.classList.contains('btn__group__btn-delete')) {
      const liElementDelete = event.target.closest('li');
      const liElementDeleteId = liElementDelete.getAttribute('id');
      todos.forEach((todo, index) => {
        if (todo.id == liElementDeleteId) {
          todos.splice(index, 1);
        }
      });
    }
    render();
    setData();
    getCount();
  }
}

function handleClickBtnEdit(event) {
  if (event.target.tagName === 'BUTTON') {
    const btn = event.target;
    if (btn.classList.contains('btn__group__btn-edit')) {
      const liElementEdit = event.target.closest('li');
      const liElementEditId = liElementEdit.getAttribute('id');
      let todoList = todos.find((todo) => {
        return todo.id == liElementEditId;
      });
      todoEditId = liElementEditId;
      inputEditTitleElement.value = todoList.title;
      textareaEditDescriptionElement.value = todoList.description;
      selectEditUserElement.value = todoList.user;
      inputEditColorElement.value = todoList.bgColor;
    }
    render();
    setData();
    getCount();
  }
}

function handleClickBtnSaveEdit(event) {
  event.preventDefault();
  todos.forEach((todo) => {
    if (todo.id == todoEditId) {
      todo.title = inputEditTitleElement.value;
      todo.description = textareaEditDescriptionElement.value;
      todo.user = selectEditUserElement.value;
      todo.bgColor = inputEditColorElement.value;
    }
  });
  render();
  setData();
}

function handleClickBtnDeleteAllDone() {
  let firstIndex = todos.findIndex((todo) => todo.status == 'Done');
  while (firstIndex != -1) {
    todos.splice(firstIndex, 1);
    firstIndex = todos.findIndex((todo) => todo.status == 'Done');
  }
  getCount();
  render();
  setData();
}

function handleMouseDownTodo(event) {
  if (event.target.tagName === 'LI') {
    const liElementDrag = event.target.closest('li');
    liElementDrag.draggable = true;
    liElementDrag.addEventListener('dragstart', onDragStart);
    liElementDrag.addEventListener('dragend', onDragEnd);
  }
}

function onDragEnd(event) {
  event.target.classList.remove('drag');
}

function onDragStart(event) {
  event.dataTransfer.setData('text', event.target.id);
  event.target.classList.add('drag');
}

function DragOver() {
  ulContainerElements.forEach((container) => {
    container.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
  });
}

function DragDrop() {
  ulContainerElements.forEach((container) => {
    container.addEventListener('drop', (event) => {
      event.preventDefault();
      const liElementID = event.dataTransfer.getData('text');
      todos.forEach((todo) => {
        if (todo.id == liElementID) {
          if (container.classList.contains('todo__ul')) {
            todo.status = 'Todo';
          }
          console.log();
          if (container.classList.contains('in-progress__ul')) {
            if (countProgress == 6) {
              modalError.show();
            } else {
              todo.status = 'Progress';
            }
          }
          if (container.classList.contains('done__ul')) {
            todo.status = 'Done';
          }
        }
      });
      render();
      setData();
      getCount();
    });
  });
}

export { handleClickBtnSave, handleClickBtnSaveEdit, handleChangeSelectStatus, handleClickBtnDelete, handleClickBtnEdit, handleClickBtnDeleteAllDone, handleMouseDownTodo, DragOver, DragDrop };
