import Modal from 'bootstrap/js/dist/modal';

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return [...document.querySelectorAll(selector)];
}

const btnAddTodoElement = $('.todo__btn-add');
const btnDeleteAllDoneElement = $('.done__btn-delete');
const btnDeleteAllElement = $('#btnDeleteAll');
const btnEditTodoElement = $('.btn__group__btn-edit');
const btnDeleteTodoElement = $('.btn__group__btn-delete');
const selectStatusElement = $('.btn__group__status');
const btnSaveElement = $('.btn btn-primary');
const ulTodoElement = $('.todo__ul');
const ulProgressElement = $('.in-progress__ul');
const ulDoneElement = $('.done__ul');
const inputTitleElement = $('input[name="title"]');
const textareaDescriptionElement = $('textarea[name="description"]');
const selectUserElement = $('select[name="user"]');
const inputColorElement = $('input[name="bgColor"]');
const inputEditTitleElement = $('input[name="titleEdit"]');
const textareaEditDescriptionElement = $('textarea[name="descriptionEdit"]');
const selectEditUserElement = $('select[name="userEdit"]');
const inputEditColorElement = $('input[name="bgColorEdit"]');

const counterElements = $$('p');

const sectionTodoElement = $('.todo');
const sectionProgressElement = $('.in-progress');
const sectionDoneElement = $('.done');

const containerTrelloElement = $('.container__trello');
const timeElement = $('time');

const formElementAdd = $('#formAdd');
const formElementEdit = $('#formEdit');

const modalWarningElement = $('#exampleModal-4');
const modalInstance = new Modal(modalWarningElement);

export {
  btnAddTodoElement,
  btnDeleteAllDoneElement,
  btnDeleteAllElement,
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
};
