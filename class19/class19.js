function fun1(m,x){
    // console.log(x); 
    // console.log(document.getElementById(x)) 
    // console.log(m);
    
    var btn_tag=document.getElementsByTagName('button');
    
    for(var y=0; y<btn_tag.length; y++){
        btn_tag[y].style.background="none";
        
    }
    m.style.background="pink";
  var div_tag=document.getElementsByClassName('box');
  for(var j=0; j<div_tag.length; j++){
    div_tag[j].style.display="none";
  }
    document.getElementById(x).style.display="block";
} 

// ################################################################
