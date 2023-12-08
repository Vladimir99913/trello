async function getUser(select) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const user = await response.json();
  user.forEach((element) => {
    let optionAddElement = document.createElement('option');
    optionAddElement.value = element.name;
    optionAddElement.innerHTML = element.name;
    select.append(optionAddElement);
  });
}
export { getUser };
