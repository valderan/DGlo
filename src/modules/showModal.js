

const showModal = (id) => {

    const visitForm = document.getElementById(id);
    visitForm.style.display = 'block';

    // обработка при закрытии формы
    const hideForm = () => {
        visitForm.style.display = 'none';
    };

    visitForm.addEventListener('click', (event) => {

        let target = event.target;

        // закрытие формы
        if (target.classList.contains('close_icon')) {
            hideForm();
        } else {
            if (!target.closest('.form-content')) {
                hideForm();
            }
        }

    });

};

export default showModal;