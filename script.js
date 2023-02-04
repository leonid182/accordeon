let accordeon = document.querySelectorAll('.accordeon');
let contant = document.querySelectorAll('.contant');








accordeon.forEach(item => {
    item.addEventListener('click',()=> {
           let el = item.nextElementSibling;
           
           if(contant){
            contant.forEach(()=> {
                el.classList.toggle('is_active');
                
            }
                
            )}
           
            
        });

    
});









