import dropDownHeaderMenu from "./dropDownHeaderMenu";
import showModal from "./showModal";


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

        // open freeVisitForm (modal window 1)
        if (target.closest('.open-popup')) {
            showModal('free_visit_form');
        }
        
        if (target.closest('.callback-btn')) {
            showModal('callback_form');
        }

    } );
    
};

export default headerEvents;