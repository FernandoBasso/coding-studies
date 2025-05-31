//
// https://fettblog.eu/typescript-better-object-keys/
//

import { log } from '../utils';

type Jedi = {
  id: number;
  name: string;
  skills: Array<string>;
};

// const yoda: Jedi = {
//   id: 1,
//   name: 'Yoda',
//   skills: ['The Force', 'Teaching'],
// };

declare const yoda: Jedi;

Object.keys(yoda).forEach(key => {
  log(yoda[key]);
});