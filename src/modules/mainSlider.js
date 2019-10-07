
const mainSlider = () => {

    const mainSlider = document.querySelector('.main-slider');
    
    if (mainSlider) {

        let idInterval = 0;

        let slider = [...document.querySelector('.main-slider').children];

        // filter: blur(0px) -> filter: blur(10px);
        const blur = async (elem, reverse = false, interval = 100) => {
            let idInt = 0,
                 index = (!reverse) ? 0 : 10;
                 if (reverse) {
                    elem.style.filter = `blur($10px)`; 
                    elem.style.display = 'flex'; 
                 }

            const setBlur = () => {

                elem.style.filter = `blur(${index}px)`;
                if(!reverse) index++;  else  index--;

                if (index < 0 || index > 10) {
                    if (!reverse) elem.style.display = 'none';
                    clearInterval(idInt);
                    index = (!reverse) ? 0 : 10;
                    return true;
                }

            };

            idInt = setInterval(setBlur, interval);

        };

        const startBlur = async (slide, nextSlide) => {
             await blur(slide, false, 40);
             await blur(nextSlide, true, 120);
        };

        const workElements = () => {

            const slider = [...document.querySelector('.main-slider').children];
            let slide, nextSlide, count = 0;

            slider.forEach((elem, index)=> {
                if(elem.style.display === 'flex') {
                    slide = elem;
                    count = index+1;
                    return;
                } 
            });

            if (count >= slider.length) {
                count = 0;
            };

            nextSlide = slider[count];

            return {slide: slide, nextSlide: nextSlide};
        }

        const showSlider = async () => {
            let workSliders = await workElements();
            await startBlur(workSliders.slide, workSliders.nextSlide);
        }

        const startSlider = () => {
            idInterval = setInterval(showSlider, 4000);
        } 

        const stopSlider = () => {
            clearInterval(idInterval);
        }

        mainSlider.addEventListener('mouseover', event => {
            let target = event.target;

            if (target.matches('.slide-text') || target.matches('.slide')) { 
                stopSlider();
            }
        });

        mainSlider.addEventListener('mouseout', event => {
            let target = event.target;

            if (target.matches('.slide-text') || target.matches('.slide')) {    
                startSlider();
            }
        });

        startSlider();

    }
}

export default mainSlider;