var error = document.getElementById("error");
var male = document.getElementById("male");
var femaile = document.getElementById("female");
var gender = document.querySelector('input[name="gender"]:checked');
var phoneNumber = document.getElementById("phone");

function checkForm(frm){                                    // Checks for invalid entries on form 
    error.innerHTML = ""; 
    var isValid = true; 
    if(frm.name.value == "" || frm.name.value.length < 6){  // Checks to see if name is less than 6 characters, throws error to user
        isValid = false;
        frm.name.focus();
        frm.name.style.background = "#f44b42";  
        error.innerHTML += "Required fields are missing. ";
        error.style.display = "block";        
    }else{
        frm.name.style.background = "";  
    }
    if(frm.email.value == ""){                             // Checks to see if email field is blank
        isValid = false;
        frm.email.focus();
        frm.email.style.background = "#f44b42";
        error.innerHTML = "Must enter a email. ";
        error.style.display = "block";          
    }else{
        frm.email.style.background = "";  
    }
    if(( frm.gender[0].checked == false ) && ( frm.gender[1].checked == false ) )  // Checks to see if both radios are unchecked
    {
        error.innerHTML += "Must pick a gender. ";
        error.style.display = "block";
        isValid = false;
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(frm.email.value))     // Verifies that email is a valid email.
    {       
        frm.email.style.background = "";       
    }else{
        frm.email.style.background = "#f44b42";
        error.innerHTML += "Invalid email. ";
        error.style.display = "block"; 
        isValid = false;
    }
    if(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(frm.phone.value))  // Verifies that phone number is valid as US Phone number
    {
        frm.phone.style.background = "";
    }else
    {   
        frm.phone.style.background = "#f44b42";
        error.innerHTML += "You have entered an invalid Phone Number. ";
        error.style.display = "block";
        isValid = false;
    }
    return isValid;
}

function atLeastOneRadio(){    
    return ($('input[type=radio]:checked').size() > 0);
}