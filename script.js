const cursorGlow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove',(e)=>{

  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';

});


const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }

  });

});

revealElements.forEach((el)=>{
  observer.observe(el);
});


const themeToggle = document.getElementById('themeToggle');


themeToggle.addEventListener('click',()=>{

  document.body.classList.toggle('light');

  if(document.body.classList.contains('light')){
    localStorage.setItem('theme','light');
    themeToggle.innerHTML='☀️';
  }
  else{
    localStorage.setItem('theme','dark');
    themeToggle.innerHTML='🌙';
  }

});


if(localStorage.getItem('theme')==='light'){
  document.body.classList.add('light');
  themeToggle.innerHTML='☀️';
}
