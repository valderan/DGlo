const calc = () => {

    const mClub = document.getElementById('card_leto_mozaika'),
        sClub = document.getElementById('card_leto_schelkovo');
    
    if (mClub && sClub) {
        
        const clubM = {1:1999, 6:9900, 9:13900, 12:19900},
            clubS = {1:2999, 6:14990, 9:21990, 12:24990},
            total = document.getElementById('price-total'),
            cards = document.getElementById('card_order'),
            promo = document.getElementById('promocode'),
            
            payment = (target) => {
                const mClub = document.getElementById('card_leto_mozaika'),
                checked = [...cards.elements].filter(item => {
                    return item.name === 'card-type' && item.checked;
                })[0].value; 
            
            if (target.name === 'card-type' || target.name === 'club-name' || target.name === 'promocode') {
                
                let club = (mClub.checked) ? clubM : clubS,
                    price = club[checked];
                //if (promo.value.toUpperCase() === 'ТЕЛО2019') {
                if (promo.value === 'ТЕЛО2019') {
                    price -= Math.round(price * 0.3);
                }
                total.innerText = price;
            }    
            }

        cards.addEventListener('click', event => {
            let target = event.target;
            payment(target);
        })  

        cards.addEventListener('change', event => {
            let target = event.target;
            payment(target);
        } )

    }

}

export default calc;