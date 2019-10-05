import dropDownHeaderMenu from "./dropDownHeaderMenu";
import showModal from "./showModal";


const headerEvents = () => {

    const header = document.querySelector('.head');

    // header
    header.addEventListener('click', (event) => {

        const target = event.target;
       
        // drop-down menu
        if (target.parentNode.closest('.clubs-list')) {
            dropDownHeaderMenu();
        };

        // open (modal window 1  free_visit_form)
        if (target.closest('.open-popup')) {
            showModal('free_visit_form');
        }
        
        // open (modal window 2  .callback-btn)
        if (target.closest('.callback-btn')) {
            showModal('callback_form');
        }

    } );

};

export default headerEvents;