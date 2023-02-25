var grocery_store=[
    {
        title: "Fresh Ginger",
        price: 110,
        status: "available",
        soldquantity: 50,
        commingsoon: "no",
        category: "vegetables",
        description: "Good source of Vitamin B6, C, Potassium, Manganese and Dietary Fiber"
    },
    {
        title: "Fresh Chilli",
        price: 8,
        status: "unavailable",
        soldquantity: 20,
        commingsoon: "no",
        category: "vegetables",
        description: "Good source of Vitamin B6, C, Iron and Potassium."
    },
    {
        title: "Fresh Banana",
        price: 20,
        status: "available",
        soldquantity: 90,
        commingsoon: "no",
        category: "fruits",
        description: "Rich in potassium, vitamin C, B6 and Dietary Fiber."
    },
    {
        title: "Fresh apple",
        price: 100,
        status: "unavailable",
        soldquantity: 0,
        commingsoon: "yes",
        category: "fruits",
        description: "Good source of Vitamin C, Dietary Fiber, Flavonoids and antioxidants."
    },
    {
        title: "Fresh Cabbage",
        price: 10,
        status: "available",
        soldquantity: 59,
        commingsoon: "no",
        category: "vegatbles",
        description: "It is a good source of Vitamin K, Dietary Fiber, Calicum, Potassium and Phosphorus."
    },
    {
        title: "Fresh Capsicum",
        price: 90,
        status: "available",
        soldquantity: 79,
        commingsoon: "no",
        category: "vegatbles",
        description: "Good source of Vitamin A,C,E, Folate and Dietary Fiber."
    },
    {
        title: "Fresh Watermelon",
        price: 200,
        status: "unavailable",
        soldquantity: 0,
        commingsoon: "yes",
        category: "fruits",
        description: "Watermelons have excellent hydrating properties with 90% water content"
    },
    {
        title: "Fresh Brinjal",
        price: 90,
        status: "available",
        soldquantity: 40,
        commingsoon: "no",
        category: "vegetables",
        description: "Good Source of Thiamin and B6 and contains little measures of Vitamin E, Vitamin C, and Vitamin K."
    },
    {
        title: "Fresh Orange",
        price: 110,
        status: "available",
        soldquantity: 90,
        commingsoon: "no",
        category: "fruits",
        description: "Valencia Rich in taste 100% Natural"
    },
    {
        title: "Fresh Potato",
        price: 120,
        status: "unavailable",
        soldquantity: 0,
        commingsoon: "yes",
        category: "vegetables",
        description: "Good source of Vitamin B6, C, Potassium, and Magnesium."
    },
]




// Findout: 
// 1.total available items name 
// 2.available items amount 
// 3.items which are out of stock 
// 4.all items (including out of stock) 
// 5.item rate greater then 100 rupees 
// 6.item rate lesser then 100 rupees 
// 7.Coming soon items 

// for(var i=0; i<grocery_store.length; i++){
//     for(var j in grocery_store[i]){
//          if([j]=="title"){
//             // console.log(grocery_store[i][j]);
            
//             document.getElementById('name_div').innerHTML+=grocery_store[i][j]+"<br>";
//          }
//          else if([j]=="price"){
//             document.getElementById('amount_div').innerHTML+=grocery_store[i][j]+"<br>";
//          }
//         }
//     } 

class groocery_detail{ 
    constructor(data){
        this.value=data;
    }
    name(){
       this.value.map((element)=>{
        document.write(element.title+"<br>");
       })
    } 
    item(){
      this.value.filter((element)=>{
     console.log(element.price); 
       
        
      }) 
    }  
   outof_stock(){
    
   }

}
var a1=new groocery_detail(grocery_store) 
a1.name(); 
a1.item();


