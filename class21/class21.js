// document.getElementById('demo1').className 

// $(document).ready(function(){
//     // console.log("hey");
//     // console.log($('#demo1'))
//     // console.log($('.abc'));
//     // console.log($('p')); 

//     $('#div1').css("color","blue");
//     $('#div1').css("border","2px solid black")
//     $('#div1').css("height","100px");
//     $('#div1').css("width","200px");

//     // we can add class

//     // $('#div2').addclass("xyz") 
//     // 
//     // if we want to use multiple class  we use apace like  // $('#div2').addclass("xyz abc pqr") 
   


// }) 

// document.getElementById('demo1').className

// $(document).ready(function(){
    // console.log("hey");
    // console.log($('#demo1'))
    // console.log($('.abc'));
    // console.log($('p'));

    // $('#div1').css("color","blue");
    // $('#div1').css("border","2px solid black");
    // $('#div1').css("height","100px");
    // $('#div1').css("width","200px");


    // $('#div2').addClass("xyz pqr mno");

    // $('#btn1').click(function(){
    //     $('#div3').addClass('img_style');
    // })



// }); 


$(document).ready(function(){
    $('#div4').mouseover(function(){
        $('#div4').css("background","blue")
    })

    $("#div4").mouseout(function(){
        $("#div4").css("background","green")
    })
})