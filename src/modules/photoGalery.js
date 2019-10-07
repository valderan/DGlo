
const photoGalery = () => {

    const time = 2500; // время для смены слайда
    let idInterval = 0;

    const gallery = document.querySelector('.gallery-slider'),
         slides = () => {
            return [...gallery.children].filter(item => {
                return item.className.toLowerCase() === 'slide';
            }); 
        };

    // определить активный слайд
    const activeSlide = () => {
        let count = 0;
        const workSlides = slides();
        workSlides.forEach((elem, index) => {
            if (elem.style.display === 'block') {
                count = index;
                return;
            }
        });
        return count;
    }
    
    // задать активный слайд
    const setActiveSlide = (index) => {
        const workSlides = slides();
        index = (index >= workSlides.length) ? index = workSlides.length - 1 : index;
        index = (index < 0 ) ? index = 0 : index;        
        workSlides.forEach((elem, count) => {
            if (index === count) {
                elem.style.display = 'block';
                setActiveDot(index);
            } else {
                elem.style.display = 'none';
            }
        });
    }

    // отобразить следующий слайд
    const showNextSlide = () => {
        let index = activeSlide();
        index = (++index >= slides().length) ? 0 : index;
        setActiveSlide(index);
        setActiveDot(index);
    }

    // отображение пердидущего слайда
    const showPrevSlide = () => {
        let index = activeSlide();
        index = (--index < 0) ? slides().length - 1 : index;
        setActiveSlide(index);
        setActiveDot(index);
    }

    // запуск автопроигрования
    const autoShow = (interval = time) => {
        idInterval = setInterval(showNextSlide, interval);
    }

    // остановка автопроигрования
    const stopAuto = () => {
        clearInterval(idInterval);
    }


    // длобавии точки 
    const addDots = () => {
        const dots = gallery.querySelector('.slider-dots'),
            count = slides().length; 
        
        for(let index = 0; index < count; index++) {
            let button = document.createElement('button');
            button.id = index;
            let li = document.createElement('li');
            li.appendChild(button);
            dots.appendChild(li);    
        }

    }

    // зададим точку
    const setActiveDot = (index) => {
        const dots = [...gallery.querySelector('.slider-dots').children];
        dots.forEach((elem, count) => {
            if (index === count) {
                elem.classList.add('slick-active')
            } else {
                elem.classList.remove('slick-active');
            }
        })
    }

    gallery.addEventListener('click', (event) => {
        let target = event.target;
       
        if (target.matches('button')) {
            setActiveSlide(+target.id);
        }

        if (target.matches('.left') || target.matches('.fa-angle-left')) {
            showPrevSlide();
        }

        if (target.matches('.right') || target.matches('.fa-angle-right')) {
            showNextSlide();
        }
    });

    gallery.addEventListener('mouseover', event => {
        stopAuto();
    });

    gallery.addEventListener('mouseout', event => {
        autoShow();
    });

    addDots();
    setActiveDot(activeSlide());
    autoShow();
    
}

export default photoGalery;