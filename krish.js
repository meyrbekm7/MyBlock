let ism = document.getElementById('name');
let family = document.getElementById('family');


function tekshir(){
    if(ism.value ===''|| family.value === ''){
        alert('iltimos Ism va familya kriting');
        return false
    }
    return true;


    
}



