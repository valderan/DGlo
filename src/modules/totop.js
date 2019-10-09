
const totop = () => {
    
    const menu = document.querySelector('.top-menu');
    const topMenuToStick = menu.offsetTop;
    

    // jопределение мобильного браузера
    const detectMobile = () => {
        if( (document.documentElement.clientWidth <= 768)) {
          return true;
        } else {
          return false;
        }
     }

     const addStyle = () =>  {
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `.topWindow {
            position: fixed;
            top: 0;
            z-index:9999; /* Чтобы приклеенный элемент располагался над всеми остальными элементами страницы */
        }
        `;
        document.head.appendChild(style);
    }

    addStyle();

    // появление кнопки для скрола вверх
    document.getElementById('totop').style.display = 'none';
    window.onscroll = function() {
        
        // появление кнопки ВВЕРХ
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 700) {
            document.getElementById('totop').style.display = 'block';
        } else {
            document.getElementById('totop').style.display = 'none';
        }

        // прилипание меню при мобильном браузере

        if (detectMobile()) {
            
            if (scrolled > topMenuToStick) {
                menu.classList.add('topWindow');
            } else {
                menu.classList.remove('topWindow');
            }
        }

      }
}

export default totop;