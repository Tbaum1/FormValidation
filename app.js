var error = document.getElementById("error");
var male = document.getElementById("male");
var femaile = document.getElementById("female");
var gender = document.querySelector('input[name="gender"]:checked');

function checkForm(frm){  
    error.innerHTML = ""; 
    var isValid = true; 
    if(frm.name.value == "" || frm.name.value.length < 6){
        isValid = false;
        frm.name.focus();
        frm.name.style.background = "#4286f4"  
        error.innerHTML += "Required fields are missing " + gender;
        error.style.display = "block";        
    }
    if(frm.email.value == ""){
        isValid = false;
        frm.email.focus();
        frm.email.style.background = "#4286f4"
        error.style.display = "block";          
    }
    if(( frm.gender[0].checked == false ) && ( frm.gender[1].checked == false ) )
    {
        error.innerHTML += "Must pick a gender " + "\n";
        error.style.display = "block";
        isValid = false;
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(frm.email.value)){       
        
       
    }else{
        error.innerHTML += "invalid email " + "\n";
        error.style.display = "block"; 
        isValid = false;
    }

    
        
    //validateEmail(frm)  
    return isValid;
}

function atLeastOneRadio(){    
    return ($('input[type=radio]:checked').size() > 0);
}