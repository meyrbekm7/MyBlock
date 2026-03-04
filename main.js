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