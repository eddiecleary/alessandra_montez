const navBtn = document.getElementById('navBtn');
const nav = document.getElementById('nav');

navBtn.addEventListener('click', function(){
  navBtn.classList.toggle('is-active');
  nav.classList.toggle("expanded");
});
