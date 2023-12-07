import { todos } from './localStorage.js';
import { getCount, countProgress } from './counterTodo.js';
import { date } from './clock.js';
import { setData } from './localStorage.js';
import { render } from './render.js';
import { Todo } from './main.js';
import {
  btnAddTodoElement,
  btnEditTodoElement,
  btnDeleteTodoElement,
  selectStatusElement,
  btnSaveElement,
  ulTodoElement,
  ulProgressElement,
  ulDoneElement,
  inputTitleElement,
  textareaDescriptionElement,
  selectUserElement,
  inputColorElement,
  inputEditTitleElement,
  textareaEditDescriptionElement,
  selectEditUserElement,
  inputEditColorElement,
  counterElements,
  sectionTodoElement,
  sectionProgressElement,
  sectionDoneElement,
  containerTrelloElement,
  timeElement,
  formElementAdd,
  formElementEdit,
  modalInstance,
} from './dom.js';
let todoEditId = 0;

function handleClickBtnSave(event) {
  event.preventDefault();
  const formData = new FormData(formElementAdd);
  const todo = new Todo(formData);
  console.log(todo);
  todos.push(todo);
  render();
  getCount();
  textareaDescriptionElement.value = '';
  inputTitleElement.value = '';
  selectUserElement.value = '';
  inputColorElement.value = '#e2d2f9';
  console.log(inputColorElement.value);
  setData();
}

function handleChangeSelectStatus(event) {
  // const selectStatusElement = $('.btn__group__status');
  if (event.target.tagName === 'SELECT') {
    const liElement = event.target.closest('li');
    console.log(liElement.getAttribute('id'));
    console.log(event.target.value);
    const selectElement = event.target;
    if (event.target.value == 'Progress' && countProgress == 6) {
      modalInstance.show();
    } else {
      todos.forEach((todo) => {
        if (todo.id == liElement.getAttribute('id')) {
          todo.status = event.target.value;
          // console.log(selectStatusElement.value);
        }
      });
    }
  }
  render();
  setData();
}

function handleClickBtnDelete(event) {
  // const btnDeleteTodoElement = $('.btn__group__btn-delete');
  if (event.target.tagName === 'BUTTON') {
    const btn = event.target;
    if (btn.classList.contains('btn__group__btn-delete')) {
      const liElementDelete = event.target.closest('li');
      const liElementDeleteId = liElementDelete.getAttribute('id');
      console.log(liElementDeleteId);
      console.log(todos);
      todos.forEach((todo, index) => {
        if (todo.id == liElementDeleteId) {
          todos.splice(index, 1);
          console.log('delete');
        }
      });
    } else if (btn.classList.contains('btn__group__btn-edit')) {
      const liElementEdit = event.target.closest('li');
      console.log(liElementEdit);

      const liElementEditId = liElementEdit.getAttribute('id');
      console.log(liElementEditId);
      let todoList = todos.find((todo) => {
        return todo.id == liElementEditId;
      });
      console.log(todoList.bgColor);
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

formElementEdit.addEventListener('submit', (event) => {
  event.preventDefault();
  todos.forEach((todo) => {
    if (todo.id == todoEditId) {
      todo.title = inputEditTitleElement.value;
      todo.description = textareaEditDescriptionElement.value;
      todo.user = selectEditUserElement.value;
      todo.bgColor = inputEditColorElement.value;
      // console.log(inputEditColorElement.value);
    }
  });
  console.log(todos);
  render();
});

function handleClickBtnDeleteAllDone() {
  let firstIndex = todos.findIndex((todo) => todo.status == 'Done');
  console.log(todos);
  while (firstIndex != -1) {
    todos.splice(firstIndex, 1);
    firstIndex = todos.findIndex((todo) => todo.status == 'Done');
    console.log(firstIndex);
  }
  getCount();
  render();
  setData();
}

export { handleClickBtnSave, handleChangeSelectStatus, handleClickBtnDelete, handleClickBtnDeleteAllDone };
