let ism = document.getElementById('name');
let family = document.getElementById('family');
let p=document.getElementById('p')


function tekshir(){
    if(ism.value ===''|| family.value === ''){
        alert('iltimos Ism va familya kriting');
        return false
    }
    return true;


    
}



window.addEventListener('load',function(){
    let ota=document.querySelector('.ota')
    ota.classList.add('ota1')
})