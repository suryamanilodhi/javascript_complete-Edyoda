// var data="suryamani"
// for(var i=0; i<data.length; i++){
//     if(data[i]=="a"||data[i]=="e"||data[i]=="i"||data=="o"||data=="u"){
//         document.write(data[i]+"<br>");
//     }
// }

// object using object literal
// // object literal
// var obj2={};
// obj2.std_name="surya";
// obj2.std_Age=23;
// obj2.std_contact=23353456436;

// console.log(obj2);

// document.write(obj2.std_name+"<br>");
// document.write(obj2.std_Age+"<Br>");
// document.write(obj2.std_contact+"<BR>");






// var obj3 = {};
// obj2.std_name = ["selena","john","tom"];
// obj2.std_age = "20";
// obj2.std_email = "selena@gmail.com"
// // console.log(obj3);
// document.write("std name is :"+obj2.std_name+"<br>");
// document.write("std age is :"+obj2.std_age+"<br>");
// document.write("std email is :"+obj2.std_email+"<br>");


//new Object()


// var emp_info = new Object();
// emp_info.emp_name = "tom";
// emp_info.emp_email = "tom@gmail.com";
// console.log(emp_info);
// document.write(emp_info.emp_name)

// document.write(Object.entries(emp_info)+"<br>");
// document.write(Object.keys(emp_info)+"<br>");
// document.write(Object.values(emp_info)+"<br>");

// var city_info = {
//     lat : 12.11,
//     lon :14.23,
//     temp : 25
// }

// document.write(Object.entries(city_info)+"<br>")
// document.write(Object.keys(city_info)+"<br>")
// document.write(Object.values(city_info)+"<br>");

// other way of axis data from object by loop

// var city_info={
//     lat:11.2,
//     lon:23.4,
//     temp:23
// }
// for(var i in city_info){
    // you will get all keys
    // console.log(i)

    // you will get all values
    // console.log(city_info[i]);

//     document.write(i+":  "+city_info[i]+
//     "<Br>")
// }

// axis when object inside object
// var emp_info = {
//     emp1 : {
//         name : "tom",
//         email : "tom@gmail.com",
//         contact : 987654
//     },
//     emp2 : {
//         name : "john",
//         email : "john@gmail.com",
//         contact :45678
//     },
//     emp3 : {
//         name : "alex",
//         email : "alex@gmail.com",
//         contact : 2345678
//     }
// }

// for(var x in emp_info){
    // console.log(emp_info[x])
    // for(var y in emp_info[x]){
        // givr keys inside object
        // console.log(y)

        // give value inside object
        // console.log(emp_info[x][y])
//         document.write(y+" ---- "+ emp_info[x][y]+"<br>")
//     }

//     document.write(" ***************** <br>")
// }


// var car_obj={
//     name:"john",
//     email:"jhon@gmail.com",
//     car_list:{
//         most_fav: ["audi", "toyoto", "bugatti", "volvo"]
//     }
// }
// // console.log(car_obj.car_list);
// console.log(car_obj.car_list.most_fav);

// while loop
// var j=1;
// while(j<10){
//     document.write(j+"<Br>");
//     j=j+1;
// }

// do while loop
// code will run atleast once in do while even condition is wrong
// var j=1;
// do{
//     document.write("hey"+j+"<br>");
//     j=j+1;
// }
// while(j<20);


// use of break
// in break interperator go out from the loop
// var x=prompt("how many candies you want")
//     var i=1;
//     var av=5;
//     while(i<x){
       
//         document.write('candy'+i+"<Br>")
//         i=i+1;

//         if(i>av){
//             document.write("sorry out of stock"+"<br>");
//             break;
//         }
//     }


// use of continue
// var arr1=[11,12,13,14,15,16,17,4,2,5,6,8];
// for(var i=0; i<arr1.length; i++){
//     if(arr1[i]<15){
//         document.write(arr1[i]+"<Br>")
//     }
//     else{
//         // by use of continue interperator terminate particular iteration.
//         document.write(arr1[i]+"sorry"+"<Br>")
//         continue;
//     }
// }



// Array method.
        //  0      1      2     3
// var arr2 = ["abc","pqr","xyz","mno"]
// to revere the array
// var ans2 = arr2.reverse();
// document.write(arr2+"<br>");

// var ans2 = arr2.join(" ");

// var ans2 = arr2.join("*");
// document.write(arr2+"<br>");
// var ans2  = arr2.pop()
// document.write(ans2+"<br>");
// arr2.shift();
// arr2.push("new_data1");
// arr2.unshift("new_data2");
// var new_a = [11,12]
// var new_b = [13,14]
// var new_c = arr2.concat(new_a,new_b);
// document.write(new_c+"<br>")
// document.write(arr2+"<br>");
// var res = arr2.slice(1)
// var res = arr2.slice(1,3)
// document.write(res+"<br>")
// arr2.splice(1,0,"demo1");
// arr2.splice(2,1)
// arr2.splice(2,2)

// document.write(arr2+"<br>");


// Array method
// var arr2=["abx","pqr","xyz"];
// ans2=arr2.reverse();
// document.write(ans2+"<br>");

// var arr1=[2,45,345,67,88,65];
// ans=arr1.join("*");
// document.write(ans);

// var arr1=[2,45,345,67,88,65];
// var ans2=arr1.pop();
// document.write(ans2+"<Br>");
// document.write(arr1);

// var ans2=arr1.shift();
// document.write(ans2+"<Br>");
// document.write(arr1);


// var arr2=[45,35,3,54,35,35,4];
// arr2.push("new");
// document.write(arr2);

//  arr2.unshift("start");
//  document.write(arr2);

//  var new_a=[23,23,23,];
//  var new_b=[34,3,2,54,5];
//  var new_c=arr2.concat(new_a,new_b);
//  document.write(new_c+"<Br>")


// var arr=[12,23,23,254,3,5,35,45,443];
// var res= arr.slice(1,4);
// document.write(res);


var arr4=[12,24,36,48,74];
//   arr4.splice(2,0,78);
// document.write(arr4);

// arr4.splice(2,1,78);
// document.write(arr4);

arr4.splice(2,1);
document.write(arr4);