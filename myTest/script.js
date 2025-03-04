// window.onload = function(){
//     window.addEventListener('scroll', function (e){
//         if(window.pageYOffset >100 ){
//             this.document.querySelector("header").classList.add('is-scrolling');
//         }else(
//             this.document.querySelector("header").classList.remove('is-scrolling');
//         )
//     });

//     const menu_btn = document.querySelector('.hamberger')
//     menu_btn.addEventListener('click', function(){
//         menu_btn.classList.toggle('is-active')
//     })
// };

// New Code here
window.onload = function(){
    window.addEventListener('scroll', function (e){
        if(window.pageYOffset > 100 ){
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.hamberger'); // Corrected class name
    const mobile_menu =document.querySelector('.mobile-nav')

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
};
