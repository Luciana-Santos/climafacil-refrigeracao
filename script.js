const menu = document.querySelector('#menu')
const closeMenu = document.querySelector('#close-menu')
const nav = document.querySelector('#nav')

menu.addEventListener('click', () => {
  nav.classList.add('menu-ativo')
})

closeMenu.addEventListener('click', () => {
  nav.classList.remove('menu-ativo')
})
