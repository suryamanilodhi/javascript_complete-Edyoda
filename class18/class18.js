var x=document.getElementById('demo1')
// x.addEventListener(a,b) tric to remember that two paramerter will be come

// x.addEventListener("click",function(){
//     x.style.background="pink";
// }); 

// function fun2(){
//     x.style.background="green"; 
// } 
// x.addEventListener("click",fun2);  

// x.addEventListener("mouseover",function(){
//     x.style.border="3px solid red";
// }) 

// x.addEventListener("mouseout",fun3);
// function fun3(){
//     x.style.border="3px solid blue";
// } 

// var a=document.getElementById("btn1");
// a.addEventListener("click",()=>{
//     a.style.background="red";
//     a.style.color="white";
// });

// var fun1=()=>{
//     a.style.background="green";
// } 

// a.addEventListener("click",fun1); 

// var m;
// function fun4(){
//     m=setTimeout(call_back_fun,3000);
// }

// function call_back_fun(){
//     // // we get it inside new tab because we are using document.write
//     // document.write("hi devika how are you");
//     document.getElementById("p1").innerHTML="hey devika how  are you "
// }

// function clear_timeout(){ 
//     // in between if you want to clear the timeout you can use  clear_timeout;
//     clearTimeout(m);
// }  

// function fun6(){
//     setInterval(function(){
//         alert("hello");

//     },3000);
// } 

// function main_fun1(){
//     setInterval(()=>{
//     var z=document.getElementById("input1").value ;
//     document.getElementById('div4').innerHTML+=z+"<br>"
//     },3000);
// } 


function main_fun2(){
    setTimeout(function(){
    var img_tag=document.createElement('img');
    img_tag.src="data:image/jpeg;base64,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"
       
    img_tag.className="img_style"
    document.getElementById('demo4').appendChild(img_tag)   
},3000)
    
}
