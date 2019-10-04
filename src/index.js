
// -- IMPORT block --

// system
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise/auto';
import 'fetch-polyfill';

// project
import headerEvents from './modules/headerEvents';
import gift from "./modules/gift";
// -- end IMPORT block --

// -- EVENT initialize block --
// события для header index
headerEvents();

// -- end EVENT block --

// -- WORK block --
// подарок
gift();


// -- end WORK block --
