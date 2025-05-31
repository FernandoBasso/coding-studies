/* eslint-disable no-unused-vars */
import {
  l,
  log,
  pipe,
  last,
  lower,
  split,
} from './helpers';

const file = 'profile.lg.JPG';

const getExt1 = function getExt1 (s) {
  const parts = s.split('.');
  const extension = parts[parts.length - 1];
  const lowerExt = extension.toLowerCase();
  return lowerExt;
};



l('getExt1:', getExt1(file));


const getExt = pipe(split('.'), last, lower);


l('getExt2:', getExt(file));

