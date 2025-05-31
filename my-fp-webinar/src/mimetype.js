/* eslint-disable no-unused-vars */

import { l, log, lower } from './helpers';

import { split, pipe, last, when, equals, always } from 'ramda';

// <source type='video/ogg' src='vid.ogv' />


function getType(str) {
  const parts = str.split('.');
  const extension = parts[parts.length - 1];
  const lowered = extension.toLowerCase();

  if (lowered === 'ogv') {
    return 'ogg';
  }

  return lowered;
}


log('1st', getType('vid.mp4'));

log('2nd', getType('vid.ogg'));

log('3rd', getType('vid.ogv'));



const getVideoType = pipe(
  split('.'),
  last,
  lower,
  when(equals('ogv'), always('ogg'))
);

log('1st', getVideoType('vid.mp4'));
log('2nd', getVideoType('vid.ogg'));
log('3rd', getVideoType('vid.ogv'));


