import dropDownHeaderMenu from "./dropDownHeaderMenu";
import freeVisitForm from "./freeVisitForm";


const headerEvents = () => {

    const header = document.querySelector('.head-main');

    // header popup menu 
    header.addEventListener('click', (event) => {

        const target = event.target;
        console.log('target: ', target);

        // drop-down menu
        if (target.parentNode.closest('.clubs-list')) {
            dropDownHeaderMenu();
        };

        // open freeVisitForm
        if (target.closest('.open-popup')) {
            freeVisitForm();
        }
        

    } );
    
};

export default headerEvents;