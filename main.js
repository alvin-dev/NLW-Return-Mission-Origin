
window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  colorNavOnScroll()
  showButtonToTop()
}

function colorNavOnScroll() {
  if(scrollY > 0){
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}

function showButtonToTop() {
  if (scrollY > 400){
    backToTopButton.classList.add('show')
  } else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

/*========= Scroll Reveal =========*/

ScrollReveal({ 
  reset: true, 
  origin: 'top',
  distance: '30px',
  duration: 800
 }).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content
  `)