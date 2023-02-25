var cartload = ()=>{
    $(document).ready(function(){
        $.get('https://fakestoreapi.com/carts',function(data,status){
            // console.log(data);
            // console.log(status);
            data.map((element)=>{
                // console.log(element)
                var div_tag = document.createElement('div');
                div_tag.className = "div_style"
                for(var i in element){
                    // document.write(i+" :- "+element[i]+"<br>");
                    // div_tag.innerHTML += i+" :- "+element[i]+"<br>" 
                   if(i=="products"){
                    for(var j=0; j<element[i].length; j++){
                        // div_tag.innerHTML+=j+":"+element[i][j]+"<Br>" 
                        for(var z in element[i][j]){
                            div_tag.innerHTML+=z+":"+ element[i][j][z]+"<br>"
                        }
                    }
                   }
                  else{
                    div_tag.innerHTML += i+" :- "+element[i]+"<br>" 
                  }
                }
                document.getElementById('demo1').appendChild(div_tag)
            })
        })

    })
   
}
cartload();