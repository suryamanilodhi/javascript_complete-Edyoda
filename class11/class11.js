// call the element by tag name / just same as class name

// when we use this method js will create square lilke structure and the name of this structure is html collection each has index vaLAUE
// var x= document.getElementsByTagName('p');
// console.log(x);

// if we dont use for loop we will use
// x[0].style.color="red";
// x[1].style.color="red";
// x[2].style.color="red";
// insted this we will use for loop

// for(var j=0; j<x.length; j++){
//     x[j].style.color="blue";
// }

// here fun1 called event handler because it is handling an event 
// function fun1(){
//     var x= document.getElementsByTagName('p');
//     console.log(x);
    
// for(var j=0; j<x.length; j++){
//     x[j].style.color="blue";
// }
// } 


// function fun2(){
//     var y=document.querySelectorAll('.box b');
//     // console.log(y);
//   for(var h=0; h<y.length; h++){
//     y[h].style.color="blue";
//   }
//   document.querySelector(".box").style.backgroundColor="pink"; 
// }


// // queryselector select one entry at a time
// document.querySelector('h1').style.color="navy"; 


// function fun3(){
// //    var z= document.getElementById('demo1').getAttribute('href');
// //    alert(z); 
//   var z=document.getElementById('demo1').getAttribute('color_name');
//   alert(z);
//   document.getElementById('demo1').style.color=z;  

//   var att=document.getElementById('demo1').getAttribute('class');
//   document.getElementById('demo2').className=att;

// //   when we use two class there has to space between two class otherwise they will merge 
//   document.getElementById('demo2').className += " "+att;
// }

// function fun4(){
//     // document.getElementById("img_id1").setAttribute("src","flower2.jpg")

//     // by class name we need to use indexing so we prefer to use by id
//     document.getElementsByClassName('img_Style')[0].setAttribute('src',"flower2.jpg");
// }
var arr1=[];
function fun5(){
  var z=document.querySelectorAll(".link_div a");
  for(var j=0; j<z.length; j++){
    z[j].setAttribute('href','https://fontawesome.com/')
    arr1.push(z[j].getAttribute('title'));
  }
  document.getElementById('read_arr').innerHTML=arr1;
}
