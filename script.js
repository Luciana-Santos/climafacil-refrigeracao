const menu = document.querySelector('#menu')
const closeMenu = document.querySelector('#close-menu')
const nav = document.querySelector('#nav')
const questions = document.querySelectorAll('.question')

menu.addEventListener('click', () => {
  nav.classList.add('menu-ativo')
})

closeMenu.addEventListener('click', () => {
  nav.classList.remove('menu-ativo')
})

questions.forEach((question) => {
  const btn = question.querySelector('.question-header')
  btn.addEventListener('click', () => {
    question.classList.toggle('active')
  })
})
