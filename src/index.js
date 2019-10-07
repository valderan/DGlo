
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
import checkValidation from "./modules/checkValidation";
import totop from "./modules/totop";
import sendForm from "./modules/sendForm";
import calc from "./modules/calc";
import mainSlider from "./modules/mainSlider";

// -- end IMPORT block --

// -- EVENT initialize block --

// события для header index
headerEvents();

// -- end EVENT block --

// -- HEADER block --

// появление кнопки скрола вверх 
totop();

//валидация форм в header
checkValidation();

// отправка форм
sendForm('form1');
sendForm('form2');
sendForm('card_order');
sendForm('footer_form');
sendForm('banner-form');

// -- end HEADER block --

// -- BODY block --

// главный слайдер
mainSlider();

// подарок
gift();

// калькулятор
calc();


// -- end BODY block --
