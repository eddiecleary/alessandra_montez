const navBtn = document.getElementById('navBtn');
const nav = document.getElementById('nav');
// const back = document.getElementById('back');

navBtn.addEventListener('click', function(){
  navBtn.classList.toggle('is-active');
  nav.classList.toggle("expanded");
});

function scrollToSection(id) {
  let element = document.getElementById(id);
  console.log(element);
  element.scrollIntoView({behavior: 'smooth'});
}

// const mdBreakpoint = window.matchMedia("(min-width: 768px)");

// if (mdBreakpoint.matches) {
//   back.textContent = 'Back To eddiecleary.com';
// } else {
//   back.textContent = 'Back';
// }

// window.addEventListener('resize', () => {
//   if (mdBreakpoint.matches) {
//     back.textContent = 'Back To eddiecleary.com';
//   } else {
//     back.textContent = 'Back';
//   }
// });