let btn = document.querySelector('#btn');
let myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'))


btn.addEventListener('click', ()=>{ 
  myModal.show();

});


var typed5 = new Typed('#texto-title', {
  strings: [' Pedro Henrique <i>Developer</i> '],
  typeSpeed: 50,
  backSpeed: 100,
  cursorChar: '_______________',
  shuffle: true,
  smartBackspace: false,
  loop: false
});







