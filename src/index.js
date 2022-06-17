import './style.css';

import Tasks from './class';

const clearAll = document.querySelector('.clear');
const form = document.querySelector('form');

const tasks = new Tasks();

clearAll.addEventListener('click', () => {
  tasks.clearCompleted();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  tasks.add({
    description: form.elements.input.value.trim(),
  });

  form.reset();
});
