
// class Apple{
//     config1(){
//         console.log("512gb")
//     }
//     config2(){
//         console.log("256gb");
//     }
//     color(product_color){
//         console.log(product_color);
//     } 
//     inch(){
//         var a=prompt("enter inch");
//         console.log(a);
//     }
// }
// // we need to create object will read this class
// // method read in the browser by a object
// var macbook_air1=new Apple(); 
// macbook_air1.config1();
// macbook_air1.color("starlight")
// macbook_air1.inch();

// var macbook_pro1=new Apple();
// macbook_pro1.config2();
//  macbook_pro1.color("gold");
// macbook_pro1.inch();

// var iphone_14=new Apple();
// iphone_14.config1() 



// class humans{
//     constructor(){
//         console.log("eat sleep walk");
//     }
//     dance(){
//         console.log('will dance');
//     }
//     swim(){
//         console.log('will swim')
//     }
// } 

// var hima=new humans();
// hima.dance(); 

// var prathvi=new humans();
// prathvi.swim(); 

// var devika=new humans(); 


// class std_info{
//     constructor(name,age){
       
//         console.log("std name is "+name+"  std age is "+age);

//     }
//     test_marks(Maths){
//         console.log(" maths marks:"+Maths);
//     }
// } 

// var std1=new std_info("john",12);
// std1.test_marks(30);

// var std2=new std_info("tom",13); 
// std2.test_marks(100); 

// var std3=new std_info("swati",22);
// std3.test_marks(90); 

// MAP() 

// var arr1=[2,4,5,6,7,3];
// // callback way
// arr1.map(fun1);
// function fun1(x){
//     console.log(x);
// }

// var arr2=["a","d","c","r","r"];
// // anonymous way
// arr2.map((y)=>{
//     console.log(y);
// })

// var arr3=[11,12,13,14,15,15,17,18,19,20];
// var ans3=arr3.map((x)=>{
//     return x*2;
// }) 
// console.log(ans3);
// console.log(arr3);  

// // filter

// var arr4=[11,12,13,14,151,61,71,18];

// var ans2=arr4.filter((z)=>{
//  return z%2==0;
// })
// console.log(ans2);
// console.log(arr4); 

var arr5=[11,12,13,14,16,17,18,19,20]

class read_arr{
    constructor(x){
        // console.log(x); 
        this.value=x;
    } 

   even_num(){
 var even= this.value.filter((a)=>{
        return a%2==0;
    })
    console.log(even);
}
   odd_num(){
    var odd=this.value.filter((m)=>{
            return m%2!=0;
        })
        console.log(odd);
    }

  mul(){ 
 var multi=this.value.map((p)=>{
        return p*4;
    })
    console.log(multi);
  }  
} 

var a1=new read_arr(arr5);
a1.even_num();
a1.odd_num();
a1.mul();