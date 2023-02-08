//Auxiliary functions for the template
const refBtn = document.getElementById('refBtn');
const tallerBtn = document.getElementById('tallerBtn');
const refaccionaria = document.getElementById('refaccionaria');
const taller = document.getElementById('taller');

refBtn.addEventListener('click', ()=>{
    console.log('hola');
    refBtn.classList.toggle('selected')
    refaccionaria.classList.toggle('flex');
    taller.classList.toggle('hidden');
})
