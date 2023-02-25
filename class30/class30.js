// var num1=12;
// document.write(num1+"<br>"); 
//  var num1=13; 
// document.write(num1+"<Br>"); 

// let num2=15; 
// document.write(num2+"<br>");
// // we can not use same variable with let 
// let num3=16;
// document.write(num3+"<Br>"); 

// // let(block scope) and var(global scope) const(block scope) 

// let str2="hi aditya";
// document.write(str2+"<br>"); 

// function fun1(){
//     var str1="hello devika"; 
//     document.write(str1+"<br>"); 

//     var str1="hello fatima"; 
//     document.write(str1+"<br>"); 

//     let str2="hi prashant" 
//     document.write(str2+"<Br>") 
//     document.write(str2+"<br>")
// } 
// fun1(); 


// var x="main_database(econ)" 
// x="new database"
// document.write(x+"<br>");  

// var y=12; 
// y=13; 
// document.write(z+"<br>"); 

// let z="amazon_pass@132534"; 
// z="new pass@27343982"; 
// document.write(z+"<br>"); 

// const database_psw=12453;
// document.write(database_psw); 

// // with const you cannot reassign the value also you cannot reuse the variable name ; 

// function fun2(){
//     const database_psw="hey@123"; 
//     document.write(database_psw+"<br>"); 
// } 
// fun2();  

// var emp_name="john"; 
// var emp_email="john@GMAIL.COM"; 
// document.write("emp name is"+emp_name+"and email is"+emp_email+"<br>");

// now we will do this with temlet literal and string literal(by using bactiuc)

// let std_name="tom"; 
// let std_email="tom@gmail.com"; 
// document.write(`<b class="abc">std name is${std_name}  and std email is ${std_email}<br></b>`) 

var btn=document.getElementById("btn1"); 
btn.addEventListener("click",()=>{
    var input_data=document.getElementById("input1").value;
    document.getElementById("div1").innerHTML=`user name is:- ${input_data}`;
})




