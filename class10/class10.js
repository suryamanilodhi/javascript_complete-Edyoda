// var a=document.getElementById('demo1').innerHTML;
// var a=document.getElementById('demo1').innerText;
// console.log(a);
// alert(a);

// function fun(){
//     document.getElementById('demo2').innerHTML="new para";
// }

// function fun3(){
//     var b=document.getElementById('input').value;
//     console.log(b);
//     alert(b);

//     document.getElementById('demo3').innerHTML+=b;
// }

// function fun4(){
//     document.getElementById('div1').innerHTML+="<img src=''>
    
// }

// *************************************************************************************************


// in .innerHTML we also get child in inner html
// var a = document.getElementById('demo1').innerHTML;

// in innerText we only get inner text not iner child
// var a = document.getElementById('demo1').innerText;

// console.log(a);
// alert(a);


// function fun2(){
//     console.log(document.getElementById('demo2'))
//     // in inner text we get i and b tag also
//     // document.getElementById('demo2').innerText = "<b><i>new_para</i></b>";
//     // in this we will only get new para with bold and italic style
//     document.getElementById('demo2').innerHTML = "<b><i>new_para</i></b>";
// }

// function fun3(){
// //    when we use input tag we use value beacause value tag is single tag
//     var b = document.getElementById('input1').value;
//     // console.log(b)
//     alert(b);
//     // we can also add value after by += 
//     document.getElementById('demo3').innerHTML += b;
// }

// function fun4(){
//     document.getElementById('div1').innerHTML += "<img src='./flower2.jpg' class='img_style'>"
// }










function fun5(){
    // we use s at the end when we call element by class name
    var x = document.getElementsByClassName('heading_style');
    console.log(x);
    x[0].style.color = "navy";
    x[0].style.backgroundColor = "pink";
    x[0].style.borderRadius = "5px";
    x[1].style.color = "red";
    x[2].style.color = "yellow";
  
    for(var j =0;j<x.length;j++){
        x[j].className += " new_style"
        console.log(x[j]);
        x[j].style.color = "red"
      
    }

}

document.getElementById('link1').style.color = "red";
document.getElementById('link1').className = "new_style"








// var std_name1  = "john"
// var std_name2 = "tom"

// var stds_name = ["john","tom","alex","selena","sam"]




























