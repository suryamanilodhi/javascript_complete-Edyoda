// function fun(){
//     var li_tag=document.createElement('li');
//     var li_text=document.createTextNode('XYZ');
// //    console.log(li_tag,li_text);
//    li_tag.appendChild(li_text); 
// //    console.log(li_tag); 
// // in this line xyz create inside li in html it show when we click on add_li
//    document.getElementById('list1').appendChild(li_tag);
// } 



// function fun2(){ 
//     for(var i=1; i<=3; i++){
//         var img_tag=document.createElement('img');
//         // console.log(img_tag); 

//         img_tag.src="image/IMG1.jpg" 
//         // console.log(img_tag); 
//   document.getElementById('div1').appendChild(img_tag); 

// //   suppose i want to style the img we can give class name to the image 
//    img_tag.className="img_Style"
//     }
  
// }  \
// function fun2(){
//     var img_data=["image/IMG1.jpg","image/IMG2.jpg","image/IMG3.jpg","image/IMG4.jpg","image/IMG5.jpg"];
//     for(var j=0; j<img_data.length; j++){
//         var img_tag=document.createElement('img');
//         img_tag.src=img_data[j]; 
//         document.getElementById('div2').appendChild(img_tag); 
//         // suppose i want to style these image 
//         img_tag.className="img_Style";
//     }
// } 

// function fun4(){
//  var ul=document.getElementById('list2'); 
// //  console.log(ul); 
// var temp_var=ul.childNodes[0]; 
// // console.log(temp_var);
// ul.removeChild(temp_var); 

// // if you want to remove all ul then you will use this
// ul.remove();
// }


// function fun5(x){
//     // console.log(x);
// (document.getElementById(x)).remove();
// } 

function remove_row(){
    // document.getElementById('row1').remove(); 
    var x=document.getElementById('child_btn');
    // console.log(x.parentNode.parentNode);
    var row=x.parentNode.parentNode; 
    // console.log(row.parentNode); 
    row.parentNode.removeChild(row);
}