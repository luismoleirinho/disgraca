document.addEventListener("DOMContentLoaded", function(e) {
    const menuButton = document.getElementById('menu-btn');
    const menu = document.querySelector('.menu');
    
    menuButton.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
    
    const swup = new Swup();
    
    
    swup.on('pageView', () => {
        const menuButton = document.getElementById('menu-btn');
        const menu = document.querySelector('.menu');
        
        menuButton.addEventListener('click', () => {
            menu.classList.toggle('open');
        });
        
      });
    

});


