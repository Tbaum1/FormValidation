var error = document.getElementById("error");
var male = document.getElementById("male");
var femaile = document.getElementById("female");

function checkForm(frm){  
    error.innerHTML = ""; 
    var isValid = true; 
    if(frm.name.value == "" || frm.name.value.length < 6){
        isValid = false;
        frm.name.focus();
        frm.name.style.background = "#4286f4"  
        error.innerHTML += "Required fields are missing";      
        error.style.display = "block";        
    }
    if(frm.email.value == ""){
        isValid = false;
        frm.email.focus();
        frm.email.style.background = "#4286f4"
        //alert("e");
        error.style.display = "block";          
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(frm.email.value)){       
        
       
    }else{
        error.innerHTML += "invalid email";
        error.style.display = "block"; 
        isValid = false;
    }
    
    //validateEmail(frm)  
    return isValid;
}