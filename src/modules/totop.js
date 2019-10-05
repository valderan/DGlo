
const totop = () => {
    
    // появление кнопки для скрола вверх
    document.getElementById('totop').style.display = 'none';
    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 700) {
            document.getElementById('totop').style.display = 'block';
        } else {
            document.getElementById('totop').style.display = 'none';
        }
      }

}

export default totop;