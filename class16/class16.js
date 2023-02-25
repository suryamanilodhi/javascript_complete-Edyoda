alert(1234);
// AJAX CALL WITH FAT ARROW 
 var productload=()=>{
    var a=new XMLHttpRequest();
    a.open("GET","https://fakestoreapi.com/products/",true);
    a.send();
    // whever you are feshing deta from dumy api 
    a.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            document.getElementById('img1').style.display="none";
            // console.log(this.responseText); 
            // console.log(typeof(this.responseText)); 
            // conversion into js object
            var data=JSON.parse(this.responseText);
            // console.log(data) 

            // we get 20 object(so we will not print like this) in document if we want to print we will use for loop
            // document.write(data); 
            for(var j=0; j<data.length; j=j+1){
                // console.log(data[j]); 
                var div_tag=document.createElement('div');
                div_tag.className="product_div";
                // document.write(div_tag);
                // console.log(div_tag);
                for(var i in data[j]){
                    // console.log(i); 
                    // console.log(data[j][i]);
                    if(i=="image"){
                       var  img_tag=document.createElement('img');
                       img_tag.className="img_Style";   
                       img_tag.src=data[j][i]; 
                    
                    //    console.log(img_tag); 
                    div_tag.appendChild(img_tag);

                    }
                    else if(i=="rating"){
                        // console.log(data[j][i]);
                    for(var z in data[j][i]){
                        // console.log(data[j][i][z]); 
                        div_tag.innerHTML+="<br>"+z+":"+data[j][i][z];
                    }
                    }
                    else{
                        div_tag.innerHTML+="<br>"+i+"---"+data[j][i]+"<br><br>"; 
                    }
                  
               
                }
                // console.log(div_tag); 
                document.getElementById("main_div").appendChild(div_tag);
            }
        
            
        }
        else{
            document.getElementById('img1').style.display="block";
        }
    }
 }
 productload();