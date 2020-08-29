const navBtn = document.getElementById('navBtn');
const nav = document.getElementById('nav');

navBtn.addEventListener('click', function(){
  navBtn.classList.toggle('is-active');
  nav.classList.toggle("expanded");
});

function scrollToSection(id) {
  let element = document.getElementById(id);
  console.log(element);
  element.scrollIntoView({behavior: 'smooth'});
}