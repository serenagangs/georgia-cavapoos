document.getElementById('year').textContent = new Date().getFullYear();
const menu=document.querySelector('.menu-toggle'); const nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.faq-item button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('active')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));