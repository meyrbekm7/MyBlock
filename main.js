let toliq = document.getElementById('toliq');
let ism = document.getElementById('ism');

let shortName = "Meyrbek Mavliyankulov Temurovich";
let fullName = "Meyrbek Mavliyankulov";

toliq.addEventListener('click', function () {

    if (ism.innerText === shortName) {
        ism.innerText = fullName;
        toliq.innerHTML='TOLIQ ISM'
    } else {
        ism.innerText = shortName;
       toliq.innerHTML='QSQA ISM'
      
    }



});


window.addEventListener('load',function(){
    let box=document.querySelector('.box2')
    box.classList.add('boxx1')
})


window.addEventListener('load',function(){
    let card=document.querySelector('.otajon')
    card.classList.add('card1p')
})

window.addEventListener('load',function(){
    let skill=document.querySelector('.skill')
    skill.classList.add('skil1')

})