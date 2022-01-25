function nav_change() 
    {
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

const mouse_area = document.getElementById('mouse-area')
const cube = document.getElementById('cube')
const mouse = document.getElementById('mouse')
let sound = new Audio('pig_sound_effect.mp3')

mouse_area.addEventListener('mousemove', (event) => {
    cube.style.transform = 'translate3d(' + ((event.offsetX - mouse_area.clientWidth / 2) / 3) +'px, ' + ((event.offsetY - mouse_area.clientHeight / 2) / 3) + 'px, 0)'
    mouse.style.transform = 'translate3d(' + (event.offsetX - 64 ) + 'px, ' + (event.offsetY - 64) + 'px, 0)'
})

mouse_area.addEventListener('mouseleave', (event) => {
    cube.style.transform = 'translate3d(0, 0, 0)'
    mouse.style.transform = 'translate3d(' + (mouse_area.clientWidth / 2 - 64) + 'px, ' + (mouse_area.clientHeight / 2 - 64) + 'px, 0)'
})

mouse_area.addEventListener('mousedown', (event) => {
    sound.play()
})






