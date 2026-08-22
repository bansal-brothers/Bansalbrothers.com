const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');if(open){nav.style.display='flex';nav.style.position='absolute';nav.style.top='64px';nav.style.left='0';nav.style.right='0';nav.style.padding='18px 5%';nav.style.background='#04101f';nav.style.flexDirection='column';}else{nav.style.display='none';}});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');nav.style.display='none';}));}

document.querySelectorAll('img').forEach(function(img){
  img.addEventListener('error', function(){
    if (!this.dataset.fixed) {
      this.dataset.fixed='1';
      const file=this.getAttribute('src')||'';
      if(file.includes('shop')) this.src='./shop.jpg';
    }
  });
});


// Smooth reveal as sections enter the viewport.
const revealItems = document.querySelectorAll('.section-heading, .availability-note, .contact, .trust');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  revealItems.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}
