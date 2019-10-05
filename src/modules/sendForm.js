import GetURL from "./GetURL"
import showModal from "./showModal";

const sendForm = (formName) => {

    const form = document.getElementById(formName),
        btnSend = [...form.elements].filter(item => {
            return item.tagName.toLowerCase() === 'button' && item.type === 'submit';
        })[0], 
        btnText = btnSend.textContent;
        
    let idFlash = 0;
    
        
    // моргание надписи чекбокса
    const checkFlash = async (elem) => {
        
        let colorRed = '#f50e55',
        colorBase = '#fff';

        const flash = async () => {

            if (!elem.classList.contains('flash')) {
                elem.classList.add('flash');
            }

            if (elem.labels[0].innerText) {
                
                if (!elem.labels[0].classList.contains('reverse')) {
                    elem.labels[0].style.color = colorRed;
                } else {
                    elem.labels[0].style.color = colorBase;
                }
                elem.labels[0].classList.toggle('reverse');
                 
            }
        }

        if (!elem.classList.contains('flash')) {
            idFlash = setInterval(flash, 100);
        } 

        const stopFlash = () => {
            clearInterval(idFlash);
            if (elem.id === 'card_check') colorBase = '#94939a';
            elem.labels[0].style.color = colorBase;
        };
        
        const stop = async () => {
            setTimeout(stopFlash, 400);
            elem.classList.remove('flash');
        }
        stop();
        
    } 

    // проверка нажатия чекбокса для обработки персональных данных
    const formChecked = (form) => {

        let result = true;
            
        const elementsForm = [...form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
        }); 
        
        elementsForm.forEach(elem => {
            if (elem.type === 'checkbox') {
               result = elem.checked;
               if (!result) {
                   checkFlash(elem);
               } 
            }
         });
         
        return result;
    }
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let  url = './server.php';
        const elementsForm = [...form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
        });
        
       // проверим ошибки валидации
        if (form.querySelector('.error')) return;
            
        // проверим нажатие чекбокса если он есть 
        if (!formChecked(form)) {
            return;
        }
        
        btnSend.innerText = 'Отправка...';

        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        // отправим данные формы на сервер
        const getUrl = new GetURL(url, body);
        getUrl.request()
                .then((response) => {
                    if(response.status !== 200) {
                        throw new Error('Status network not 200');
                    };
                    
                    // очистим форму
                    elementsForm.forEach(elem => {
                        elem.classList.remove('success');
                        if (elem.type === 'checkbox') {
                            elem.checked = false;
                        };

                        if (elem.type == 'text' || elem.type == 'tel') {
                            elem.value = '';
                        };

                        btnSend.innerText = btnText;
                    });
                    
                    // если окна модальные - закроем их 
                    if (formName === 'form1') {
                        showModal('callback_form', true);
                    } else if(formName === 'form2') {
                        showModal('free_visit_form', true);
                    }

                    showModal('thanks');

                })
                .catch((err) => {

                    // если окна модальные - закроем их 
                    // if (formName === 'form1') {
                    //     showModal('callback_form', true);
                    // } else if(formName === 'form2') {
                    //     showModal('free_visit_form', true);
                    // }

                    btnSend.innerText = btnText;
                    showModal('thanks', false, {header: 'ОШИБКА!', body: 'Что-то не так!<br>Попробуйте еще раз.'});
                    console.error(err);
                })
    });
    
}

export default sendForm;