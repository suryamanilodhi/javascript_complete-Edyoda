function radio_value(){
    var z=document.querySelectorAll('.form1 input');
    for(var j=0; j<z.length; z++){
        if(z[j].type="radio"){
            if(z[j].checked){
                // console.log(z[j]); 
                document.getElementById('div1').innerHTML+=z[j].name;
            }
        }
    }
}
