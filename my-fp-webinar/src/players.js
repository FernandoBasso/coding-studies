/* eslint-disable no-unused-vars */
import { l, log, map, upper } from './helpers';

import {
  reduce,
  uniq,
  pipe,
} from 'ramda';

const players = [
  { name: 'Yoda', skill: 'The Force', level: 100 },
  { name: 'Ahsoka Tano', skill: 'Dual Lightsaber', level: 91 },
  { name: 'Darth Vader', skill: 'The Force', level: 100 },
  { name: 'Obi-Wan Kenobi', skill: 'Lightsaber', level: 89 },
  { name: 'Aayla Secura', skill: 'Foresight', level: 93 },
  { name: 'Qui-Gon Jinn', skill: 'Lightsaber', level: 79 },
  { name: 'Luke Skywalker', skill: 'Racing', level: 99 },
];

const append = key => (acc, obj) => [...acc, obj[key]];

const getSkills = pipe(
  reduce(append('skill'), []),
  uniq,
);

l(getSkills(players));



const result = [];
for (const player of players) {
  if (!result.includes(player.skill)) {
    result.push(player.skill.toUpperCase());
  }
}

l(result);
