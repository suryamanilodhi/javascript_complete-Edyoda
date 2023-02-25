// function validation(){
//     var name_input=document.getElementById("name_input");
//     var password_input=document.getElementById('password_input');
//     var flag=true;
//     if(name_input.value.trim()==""){
//         // alert("add the data"); 
//         document.getElementById('error1').innerHTML="please add data";
//         name_input.style.border="2px solid red";
//         flag=false;
//     } 
//     else if(name_input.value!=""){
//         document.getElementById('error1').innerHTML="";
//         name_input.style.border="";
//     }
//     if(password_input.value.trim()==""){
//         // alert("add your name");
//         document.getElementById('error2').innerHTML="please add data";
//         password_input.style.border="2px solid red";
//         flag=false;
//     } 
//     else if(password_input.value!==""){
//         document.getElementById('error2').innerHTML="";
//         password_input.style.border="";
//     }
//     // alert(flag);
//     return flag;
    
// } 
// validation();




function validation2(){
    var email_input = document.getElementById('email_input').value;
    var flag = true;
    var email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    var password_input = document.getElementById('password_input2').value;
    var password_regex = /^(?=.*\d).{4,8}$/

    if(email_input.trim()==""){
        alert("Add your email");
        flag = false
    }
    else if(!email_input.match(email_regex)){
        document.getElementById('email_error').innerHTML  = " Non-Matches : Doesn't allow numbers in the domain name and doesn't allow for top level domains that are less than 2 or more than 3 letters (which is fine until they allow more). Doesn't handle multiple &quot;.&quot; in the domain (joe@abc.co.uk)."
        flag = false
    }
    else if(email_input.match(email_regex)){
        alert("good job right email id");
        document.getElementById('email_error').innerHTML =  "";
        flag = true;

        }

    if(password_input.trim()==""){
        alert("Add your password");
        flag = false
    }

    else if(!password_input.match(password_regex)){
        document.getElementById('password_error2').innerHTML = "Password must be between 4 and 8 digits long and include at least one numeric digit."
        flag = false
    }


    return flag;
}
