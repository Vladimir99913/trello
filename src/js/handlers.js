import { todos } from './localStorage.js';
import { getCount, countProgress } from './counterTodo.js';
import { date } from './clock.js';
import { setData } from './localStorage.js';
import { render } from './render.js';
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

// todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

function handleClickBtnSave(event) {
  //   event.preventDefault();
  //   const todo = {
  //     id: Date.now(),
  //     title: inputTitleElement.value,
  //     description: textareaDescriptionElement.value,
  //     user: selectUserElement.value,
  //     createdAt: date.toLocaleTimeString(),
  //     status: 'Todo',
  //   };
  //   todos.push(todo);
  //   render();
  //   textareaDescriptionElement.value = '';
  //   inputTitleElement.value = '';
  //   selectUserElement.value = 'Select user';
  //   setData();
  // }

  event.preventDefault();
  const todo = {};
  const formData = new FormData(formElementAdd);
  formData.append('createdAt', date.toLocaleTimeString());
  formData.append('status', 'Todo');
  formData.append('id', Date.now());

  for (let [key, value] of formData.entries()) {
    todo[key] = value;
  }
  console.log(formData);
  console.log(todo);
  console.log(textareaDescriptionElement.value);
  todos.push(todo);
  render();
  getCount();
  textareaDescriptionElement.value = '';
  inputTitleElement.value = '';
  selectUserElement.value = '';
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
