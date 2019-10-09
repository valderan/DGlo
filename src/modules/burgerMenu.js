const burgerMenu = () => {
     
    const menu = document.querySelector('.menu-button');
    const popup = document.querySelector('.popup-menu');

    const popupHide = () => {
        popup.style.display = 'none';
    }

    const popupShow = () => {
        popup.style.display = 'flex';

        popup.addEventListener('click', event => {
            let target = event.target;

            if(target.closest('.close-menu-btn')) {
                popupHide();
            }

            if (target.closest('a')) {
                popupHide();
            }            
        })
    }
    
    menu.addEventListener('click', popupShow);

};

export default burgerMenu;