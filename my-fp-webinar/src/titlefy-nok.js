/* eslint-disable no-unused-vars */
import { l, log } from './helpers';

//
// A function should only take input and produce output.
// It should never change things outside itself.
//

const yoda = {
  id: 1,
  name: 'Yoda',
  skill: 'Lightsaber',
};

//
// NOK: Changes the input parameter.
// It should just return a new object without
// affecting the parameter at all.
//
const titlefy = obj => {
  obj.name = `<h2>${obj.name} ✔ λ 💩</h2>`;
  return obj;
};

const display = jedi => {
  const nameElem = document.createElement('div');
  nameElem.innerHTML = titlefy(jedi).name;
  document.body.appendChild(nameElem);
  // log('Jedi on the UI', titlefy(jedi));
};

const save = jedi => {
  log('Oops!', jedi);
  // store jedi to database.
};

//
// 1. User types data into the form, UI displays it.
//
display(yoda);
display(yoda);

//
// 2. User submits to save to DB.
// Oops! Input data changed.
//
save(yoda);


