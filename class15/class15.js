// var demo_data={
//     name:"abc",
//     email:"abc@gadhf.com",
//     contact:3475974937,
// } 
// console.log(demo_data,typeof(demo_data))

// //js object------>json string---json stringify
// // var final_json=JSON.stringify(demo_data); 
// // console.log(final_json,typeof(final_json)); 

// // json.string----------js object--JSON.parse 

// // var final_obj=JSON.parse(final_json);
// // console.log(final_obj,typeof(final_obj)); 


// function fun1(x){
//     console.log(x);
//     x.style.color="red";
// } 


// var person={
//     std_name:"john",
//     std_email:"johan@gamil.com",
//     std_contact:85449375,
//     read_data:function(){
//         return this.std_name+" "+this.std_email+" "+this.std_contact;
//     }

// } ;
// document.write(person.read_data()); 

function  read_post(){
    var a= new XMLHttpRequest();

    a.open("GET","https://fakestoreapi.com/products",true);
    a.send(); 
    a.onreadystatechange=function(){
        console.log(this.readystate) 
        // if(this.status==200 &&  this.readystate==4){
        //     console.log(this.responseText);
        // }
    }
} 
read_post();


