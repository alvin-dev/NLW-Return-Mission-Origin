// window.onscroll = () => {onScroll()};

function onScroll() {
  if(scrollY > 0){
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}

function buttonMenu() {
  bodyMenu.classList.toggle('menu-expanded')
}
