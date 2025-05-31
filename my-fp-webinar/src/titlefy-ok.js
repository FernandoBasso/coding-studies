/* eslint-disable no-unused-vars */
import { l, log } from './helpers';

//
// A function should only take input and produce output.
// It should never change things outside itself.
//

const yoda = {
  id: 1,
  name: 'Yoda',
  skill: 'Lightsaber'
};

//
// OK: Does _NOT_ change input parameter. Rather, returns
// a new object.
//
const titlefy = obj => {
  return {
    ...obj,
    name: `<h2>${obj.name} ✔ λ 💩</h2>`
  };
};

const display = jedi => {
  const nameElem = document.createElement('div');
  nameElem.innerHTML = titlefy(jedi).name;
  document.body.appendChild(nameElem);
  // log('Jedi on the UI', titlefy(jedi));
};

const save = jedi => {
  log('Jedi on the DB:', jedi);
  // store jedi to database.
};

display(yoda);
display(yoda);
display(yoda);

//
// OK. Now everything is fine!
//
save(yoda);


