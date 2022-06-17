import 'material-icons/iconfont/material-icons.css';
import './style.css';

import Tasks from './class';

const clearAll = document.querySelector('.clear');
const form = document.querySelector('form');

const tasks = new Tasks();

render(tasks);

clearAll.addEventListener('click', () => {
  tasks.clearCompleted();
  render(tasks);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  tasks.add({
    description: form.elements.input.value.trim(),
  });

  form.reset();

  render(tasks);
});

handleDrag(tasks);
