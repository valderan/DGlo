class Validator{
    constructor({selector, pattern = {}, method}) {
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method = method;
        this.elementsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
        });
        this.error = new Set();
    }

    init() {
        this.applyStyle();
        this.setPattern();
        this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
    }

    isValid(elem) {

        const validatorMethod = {
            notEmpty(elem) {
                if (elem.value.trim() === ''){
                    return false;
                }
                return true;
            },

            pattern(elem, pattern) {
                return pattern.test(elem.value);
            }
        };

        if (this.method) {
            
            const method = this.method[elem.id];
        
            if (method) {
                return method.every( item => {
                    return validatorMethod[item[0]](elem, this.pattern[item[1]]);      
                });
            }

        } else { 
            console.warn('Необходимо передать id полей ввода и методы проверки этих полей');
        }

        return true;
    }

    checkIt(event) {
        const target = event.target;

        if(this.isValid(target)) {
            this.showSuccess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
 
    }

    showError(elem) {
        elem.classList.remove('success');
        elem.classList.add('error');
        if (elem.nextElementSibling) {
            if(elem.nextElementSibling.classList.contains('validator-error')) {
                return;
            }
        }

// вывод сообщения об ошибке        
        const errorDiv = document.createElement('div');
        //errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.textContent = '';
        errorDiv.classList.add('validator-error');
        //elem.insertAdjacentElement('afterend', errorDiv);
    }

    showSuccess(elem) {
        elem.classList.remove('error');
        elem.classList.add('success');
     
        if (elem.nextElementSibling) {
            if(elem.nextElementSibling.classList.contains('validator-error')) {
                elem.nextElementSibling.remove();
            }
        }
    }

    applyStyle(){
        const style = document.createElement('style');
        style.textContent = `
            input.success {
                border: 2px solid green !important
            }
            input.error {
                border: 2px solid red !important;
            }
            .validator-error {
                font-size: 14px;
                font-family: sans-serif;
                color: red
            }
        `;
        document.head.appendChild(style);
    }

    setPattern() {
        
        if (!this.pattern.phone) {
            //this.pattern.phone = /^\+?[78]([-()]*\d)*$/;
            this.pattern.phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        }
        
    }
};

export default Validator;