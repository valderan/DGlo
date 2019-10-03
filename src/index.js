'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import 'formdata-polyfill';
import 'es6-promise/auto';
import 'fetch-polyfill';

let h1 = document.querySelector('h1');
h1.innerText = 'it works';