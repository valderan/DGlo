import Validator from "./Validator";

const checkValidation = () => {

    //валидация формы "Перезвонить мне"
    const validForm1 = new Validator({
        selector: '#form1',
        pattern: {},
        method: {
            'callback_form1-phone': [
                ['notEmpty'],
                ['pattern', 'phone']
            ]
        }
    });

    //валидация формы "Бесплатный визит"
    const validForm2 = new Validator({
        selector: '#form2',
        pattern: {},
        method: {
            'callback_form2-phone': [
                ['notEmpty'],
                ['pattern', 'phone']
            ]
        }
    });

    const validForm3 = new Validator({
        selector: '#card_order',
        pattern: {},
        method: {
            'callback_form-phone': [
                ['notEmpty'],
                ['pattern', 'phone']
            ]
        }
    });

    const validForm4 = new Validator({
        selector: '#footer_form',
        pattern: {},
        method: {
            'callback_footer_form-phone': [
                ['notEmpty'],
                ['pattern', 'phone']
            ]
        }
    });

    const validForm5 = new Validator({
        selector: '#banner-form',
        pattern: {},
        method: {
            'phone': [
                ['notEmpty'],
                ['pattern', 'phone']
            ]
        }
    });

    validForm1.init();
    validForm2.init();
    validForm3.init();
    validForm4.init();
    validForm5.init();


    const inputs = 'banner-form-name,card_order-name,form2-name,form1-name'.split(',');
    inputs.forEach(elem => {
        let input = document.getElementById(elem);
        input.addEventListener('input',() => {
            input.value = input.value.replace( /[^а-яА-ЯЁё ]/ , '');
        });
    });
    
};

export default checkValidation;