
const showModal = (id, close = false, data = false) => {

    const visitForm = document.getElementById(id);
    visitForm.style.display = 'block';

    // обработка при закрытии формы
    const hideForm = () => {
        visitForm.style.display = 'none';
    };


    const setInfo = () => {

        if(id === 'thanks') {
            if (data.header) {
                visitForm.querySelector('h4').innerHTML = data.header;
            }
            
            if (data.body) {
                visitForm.querySelector('p').innerHTML = data.body;
            }
            
        }
    };

     if(id === 'thanks') {
         setInfo();
     }

    if (!close) { 
        visitForm.addEventListener('click', (event) => {

            let target = event.target;

            // закрытие формы
            if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
                hideForm();
            } else {
                if (!target.closest('.form-content')) {
                    hideForm();
                }
            }

        });
    } else {
        hideForm();
    }

};

export default showModal;