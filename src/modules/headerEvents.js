import dropDownHeaderMenu from "./dropDownHeaderMenu";


const headerEvents = () => {

    const header = document.querySelector('.head-main');

    // header popup menu 
    header.addEventListener('click', (event) => {

        const target = event.target;

        if (target.parentNode.closest('.clubs-list')) {
            dropDownHeaderMenu();
        };

    } );
    
};

export default headerEvents;