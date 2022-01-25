function nav_change() {
    const nav = document.querySelector('nav')
    const button = document.querySelector('nav button')
    const nav_hack = document.querySelector('.nav-hack')
    
    if(nav.classList.contains('nav-visible'))
    {
        nav.classList.remove('nav-visible')
        button.innerHTML = '<i class="fas fa-bars">'
        nav_hack.classList.remove('nav-h-big')
    }
    else
    {
        nav.classList.add('nav-visible')
        button.innerHTML = '<i class="fas fa-times"></i>'
        nav_hack.classList.add('nav-h-big')
    }
}