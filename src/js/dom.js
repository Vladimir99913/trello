import Modal from 'bootstrap/js/dist/modal';

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return [...document.querySelectorAll(selector)];
}

const sectionTodoElement = $('.todo');
const sectionProgressElement = $('.in-progress');
const sectionDoneElement = $('.done');
const btnDeleteAllDoneElement = $('#btnDeleteAll');
const selectStatusElement = $('.btn__group__status');
const inputTitleElement = $('input[name="title"]');
const textareaDescriptionElement = $('textarea[name="description"]');
const selectUserElement = $('select[name="user"]');
const inputColorElement = $('input[name="bgColor"]');
const inputEditTitleElement = $('input[name="titleEdit"]');
const textareaEditDescriptionElement = $('textarea[name="descriptionEdit"]');
const selectEditUserElement = $('select[name="userEdit"]');
const inputEditColorElement = $('input[name="bgColorEdit"]');
const ulContainerElements = $$('ul');
const counterElements = $$('p');
const timeElement = $('time');
const formElementAdd = $('#formAdd');
const formElementEdit = $('#formEdit');
const modalErrorElement = $('#ErrorModal');
const modalError = new Modal(modalErrorElement);

export {
  btnDeleteAllDoneElement,
  selectStatusElement,
  ulContainerElements,
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
  timeElement,
  formElementAdd,
  formElementEdit,
  modalError,
};
