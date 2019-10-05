import showModal from "./showModal";

// работа с подраком
const gift = () => {

    const giftObj = document.querySelector('.fixed-gift');
    
    if (giftObj) {
        // open gift modal window 
        const giftOpen = () => {
            giftObj.style.display = 'none';
            showModal('gift');
        };

        giftObj.addEventListener('click', giftOpen);
    };
};

export default gift;