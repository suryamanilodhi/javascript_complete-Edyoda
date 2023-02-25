// alert(1234);
// alert(9898);
// alert("abc");

// var a = 12;
// console.log(a);
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();


// Function Declaration with function keyword & JavaScript Hoisting

// function hello(){
//     document.write("hey how are you ? <br>")
// }


// hello();
// console.log(a);
// a = 12;
// var a;
// console.log(a);
// a = "abc"
// console.log(a);

// var num1 = 12;
// var num2 = 13;
// alert(num1+num2);


// var num3 = 14;
// var num4 = 15;
// alert(num3+num4);


// var num5 = 20;
// var num6 = 22;
// alert(num5+num6);
// add();
// add(3);

// function add(x=2,y=9,z=1){
//     final_ans = true+true+z;
//     document.write("ans is : "+ final_ans+"<br>")
// }
// // add("abc","pqr","mno");
// // add(2,3,4);
// // add(12,12,14);
// // add(" hey "," john ","how are you ?");
// add();
// add(1,2,12)
// add(0,0,20);
// add(true,true,false);


// function fun1(){
//     var num1 = prompt("Enter num1");
//     var num2 = prompt("Enter num2");
//     var final_ans = num1*num2
//     document.write("the ans is : "+final_ans+"<br>")
// }
// fun1();
// fun1();

// Function Expression or  Anonymous Functions

// y("alex")

// var y = function(username){
//    document.write("hey "+username+"<br>")
// }

// y("john");
// y("tom");


// y("selena");

// Arrow Function

// function / ()=>

// var x = ()=>document.write("hey how are you ? <br>");
// x();


// var sub = (num1,num2)=>{
//     var final_ans = num1 - num2;
//     document.write("the ans is : "+final_ans)
// }
// sub(12,9);




// var python_class = ["dinesh","prashant"]
// var js_class = ["pavna","hima"]
// var react_class = ["devika","ravi","suraj","smita"]
// var std_id = [11,12,13]
// var std_info = {
//     std_1 : "john@gmail.com",
//     std_2 : "tom@gmail.com"
// }
// var js_marks = [40,50,18,60,70,75,11,12,13,14]
// var python_marks = [30,34,24,25,26,90,80,100]
// var react_marks = [45,120,100,23,24,25]
// console.log(python_class);
// console.log(js_class);
// console.log(react_class);


// function fun2(main_arr){
//     // console.log(main_arr)
//     // document.write(main_arr+"<br>")
//     for(var j =0;j<main_arr.length;j=j+1){
//        if(main_arr[j]>35){
//         document.write(main_arr[j]+"<br>")
//        }
       
//     }

    // document.write("********************<br>")
// }
// fun2(js_marks)
// fun2(python_marks)
// fun2(react_marks)



// fun2(python_class);
// fun2(js_class);
// fun2(react_class);
// fun2(std_id)
// fun2(std_info)

// for in loop 




// var emp1 = {
//     user_name : "john",
//     user_email : "john@gmail.com",
//     user_contact : 98765 
// }



// var emp2 = {
//     user_name : "tom",
//     user_email : "tom@gmail.com",
//     user_contact : 98765 
// }



// var emp3 = {
//     user_name : "alex",
//     user_email : "alex@gmail.com",
//     user_contact : 98765 
// }



// function fun3(main_fun){
//     for(var x in main_fun){
//         document.write(main_fun[x]+"<br>");
//     }
// }

// fun3(emp1);
// fun3(emp2);
// fun3(emp3);

// document.write(Number("hello")+"<br>");
// document.write(Number("20")+"<br>");
// document.write(Number(true)+"<br>");
// document.write(Number(false)+"<br>");
// document.write(Number("20 data")+"<br>");
// document.write(Number(" data 20 ")+"<br>");
// document.write(Number("20,12,12,14")+"<br>");
// document.write(Number("20 12 12 14")+"<br>");



// document.write(parseInt("20,12,12,14")+"<br>");
// document.write(parseInt("20data")+"<br>");
// document.write(parseInt("20 12 13")+"<br>");

// document.write(Number("22.22")+"<br>");

// document.write(parseInt("22.22")+"<br>");

// document.write(parseFloat("32.22")+"<br>");

// document.write(parseFloat("32.22 50 34.22")+"<br>");

// document.write(parseFloat("32.2 string")+"<br>");

// document.write(parseFloat("32.22,12,13,14")+"<br>");


// document.write(Number(true)+"<br>");
// document.write(Number(false)+"<br>");


// document.write(parseInt(true)+"<br>");
// document.write(parseInt(false)+"<br>");

// document.write(parseFloat(true)+"<br>");
// document.write(parseFloat(false)+"<br>");


// document.write(parseInt("abc 12")+"<br>");

var num_a = 12.11
// var num_a = 12.5
var num_a = 12.75

var ans_a = num_a.toFixed(1)
document.write(ans_a,typeof(ans_a))





 