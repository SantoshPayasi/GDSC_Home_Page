document.addEventListener('DOMContentLoaded', function(){
    const navTogglerIcon = document.querySelector('#toggleBtn')
    const navroute = document.querySelector("[data-navroutes]")
    // console.log(innerWidth)
    // console.log(navChanger)
    if(Window.innerWidth>603){
        navroute.classList.toggle("nav-responsive")
        navroute.classList.add("nav-menu")
    }


    function toggleNav(){
        navroute.classList.toggle("nav-responsive")
        navroute.classList.add("nav-menu")
        navTogglerIcon.src = 'Assets/images/hamburger.png'
    }
   
    navTogglerIcon.addEventListener('click', function(){
        
        if(navroute.classList.contains("nav-menu")){
            navTogglerIcon.src = 'Assets/images/cross.png'
            navroute.classList.toggle("nav-menu")
            navroute.classList.add("nav-responsive")
        }
        else{
           
            // navroute.classList.toggle("nav-responsive")
            // navroute.classList.add("nav-menu")
            // navTogglerIcon.src = 'Assets/images/hamburger.png'
            toggleNav();
        }
        
    })

    navroute.addEventListener('click', function(){
        if(navroute.classList.contains("nav-responsive")){
            toggleNav();
        }
    })
})