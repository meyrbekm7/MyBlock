let ism = document.getElementById('name');
let family = document.getElementById('family');


function tekshir() {

    let ismUzunligi = ism.value.length; 

    if (ismUzunligi >= 10) {
        alert('Ismingiz juda kop')
   
    } 
    else if (ismUzunligi <= 2) {
        alert('Ismingiz jua kam')
        
      
    } 

    let FamilyUzun=family.value.length;

    if(FamilyUzun>15){
        alert('familyangiz Juda kop')
    }else if(FamilyUzun<5){
        alert('familyangiz juda kam')
    }
    
  
}


