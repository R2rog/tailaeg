//Auxiliary functions for the template
const refBtn = document.getElementById('refBtn');
const tallerBtn = document.getElementById('tallerBtn');
const refaccionaria = document.getElementById('refaccionaria');
const taller = document.getElementById('taller');
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

let valueDisplays = document.querySelectorAll(".num")
let interval = 2000;
let shown = 0

//============================== HAMBURGER MENU ===============================================
btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})
//============================= COUNTER CONTROLLER ============================================
window.addEventListener('scroll', function() {
    valueDisplays.forEach((valueDisplay)=>{
        let position = valueDisplay.getBoundingClientRect();
        if(position.top >= 0 && position.bottom <= window.innerHeight && shown != 3) {
            let startValue;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval/endValue);
            if(valueDisplay.id == "refacciones") startValue = 11150;
            else startValue = 0;
            let counter = setInterval(function (){
                startValue +=1;
                valueDisplay.textContent = startValue;
                if(startValue == endValue){
                    clearInterval(counter);
                };
            }, duration); 
            shown += 1;
        };
    })
});
//===================================== CONTROLLERS ==========================================
refBtn.addEventListener('click', ()=>{
    if(!refBtn.classList.contains('selected')){
        console.log('Refa btn before',{tallerBtn},{refBtn});
        tallerBtn.classList.toggle('normal');
        tallerBtn.classList.toggle('selected');
        refBtn.classList.toggle('selected');
        refBtn.classList.toggle('normal');
        refaccionaria.classList.toggle('flex');
        refaccionaria.classList.toggle('hidden');
        taller.classList.toggle('hidden');
        taller.classList.toggle('flex');
        console.log('Refa btn after',{tallerBtn},{refBtn});
    }else console.log('Already selected');
});

tallerBtn.addEventListener('click', ()=>{
    if(!tallerBtn.classList.contains('selected')){
        console.log('Taller btn before',{tallerBtn},{refBtn});
        refBtn.classList.toggle('normal');
        refBtn.classList.toggle('selected');
        tallerBtn.classList.toggle('selected');
        tallerBtn.classList.toggle('normal');
        taller.classList.toggle('flex');
        taller.classList.toggle('hidden');
        refaccionaria.classList.toggle('hidden');
        refaccionaria.classList.toggle('flex');
        console.log('Taller btn after',{tallerBtn},{refBtn});
    }else console.log('Already selected');
});

function gmNoop() { console.log('GMap Callback') }
