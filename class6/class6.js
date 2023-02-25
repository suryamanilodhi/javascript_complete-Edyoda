for(box=1;box<=5;box=box+1){
    document.write("object is inside box"+box+"<br>");
}

for(box=5;box>=1;box=box-1){
    document.write("object is inside box"+box+"<br>");
}

for(var i=10; i<=100; i=i+10){
    document.write(i+"<Br>");
}

// or
for(var y=1; y<=10; y=y+1){
    document.write(25*y+"<br>");
}

var data="hello javascript is fun";
for(var i=0; i<data.length; i=i+1){
    document.write(data[i]+"<br>");
}

var data1=prompt("enter your name");
for(var index=0; index<data1.length; index++){
    document.write(data1[index]+"<br>");
}

var num=[11,12,13,14,15,16]
for(var y=0; y<num.length; y=y+1){
    if(num[y]%2==0){
        document.write("num is even"+num[y]+"<br>")
    }
    else if(num[y]%2!==0){
        document.write("numn is odd"+num[y]+"<br>")
    }
}


var data=[11,12,13,14,15.16,17,18,19,20,21]

for(var i=0; i<data.length; i++){
    if(data[i]%5==0 && data[i]%3==0){
        document.write("num is divisible by both 5 and 3"+data[i]+"<Br>");
    }
    else if(data[i]%5==0){
        document.write("the num is divisible by 5"+data[i]+"<Br>")
    }
    else if(data[i]%3==0){
        document.write("num is divisiblke by 3"+data[i]+"<Br>")
    }

}