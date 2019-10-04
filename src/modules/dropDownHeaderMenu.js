'use strict;'


// header popUp menu
const dropDownHeaderMenu = () => {
      
    const popup = document.querySelector('.clubs-list'),
        ul = popup.querySelector('ul').style;

    if (!ul.display) {
        ul.display = 'none';
    }

    ul.display = (ul.display === 'none') ? 'block' : 'none'

};

export default dropDownHeaderMenu;

