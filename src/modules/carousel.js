class Carousel{
    constructor(
        {
            main, 
            wrap, 
            next, 
            prev, 
            infinity = false,
            position = 0,
            slidesToShow = 4
        }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slides = [...this.wrap.children].filter((item) => {
            return item.className === 'slide';
        });
        this.slidesToShow = slidesToShow; 
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100/this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow
        };
        
    }

    init() {
        this.addStyle();
        this.addGloClass();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        this.slides.forEach(elem => {
            elem.classList.add('glo-slider__item');
        });
    }

    addStyle() {
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
            .glo-slider{
                overflow: hidden !important;
            }

            .glo-slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
        
            .glo-slider__item {
                flex: 0 0 ${this.options.widthSlide}% !important;
               !important;
            }
        `;
        document.head.appendChild(style);
        
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
        }
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.options.maxPosition){
            ++this.options.position;
            if (this.options.position > this.options.maxPosition) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
        }
    }

    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);

        const style = document.createElement('style');
        style.textContent = `
            .glo-slider__prev,
            .glo-slider__next{
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
            }
            .glo-slider__next {
                border-left-color: #19b5fe
            }

            .glo-slider__prev {
                border-right-color: #19b5fe
            }

            .glo-slider__prev:hover,
            .glo-slider__next:hover,
            .glo-slider__prev:focus,
            .glo-slider__next:focus{
                background: transperent;
                outline: transparent;
            }
        `;

        document.head.appendChild(style);
    }
}

export default Carousel;