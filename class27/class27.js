// class Apple{
//     constructor(){
//         document.write("logo <br>")
//     }
//     config1(){
//         document.write("m1 258gb <br>");
//     }
//     config2(){
//         document.write("m2 512gb <br>")
//     }
//     color(product_color){
//                 // console.log("starlight");
//                 document.write(product_color+"<br>"); 
//     }
// }
// var macbook_air1 = new Apple();
// macbook_air1.config1();
// macbook_air1.color("gold");


// var macbook_pro1 = new Apple();
// macbook_pro1.config2();
// macbook_pro1.color("starlight");


// var iphon14 = new Apple();



// class std_info{
//     constructor(name,age){
//         // document.write("std name is : "+name+ " std age is : "+age+"<br>")
//         this.std_name = name;
//         this.std_age = age;

//     }
//     science(sci_marks){
//         document.write("science test marks : ",sci_marks+"<br>");
//     }
//     maths(maths_marks){
//         document.write("maths test marks :",maths_marks+"<br>");
//     }
//     print(){
//         document.write("std name is : "+this.std_name+ " std age is : "+this.std_age+"<br>")
//     }
// }

// var std1 = new std_info("john",20);
// std1.science(80);
// std1.print()
// var std2 = new std_info("tom",21);
// std2.maths(90);
// std2.print();


// var arr1 = [11,12,13,14,15,16,17,18,19,20];

// var arr2 = [30,31,32,33,34,35,36,37,38,39,40];

// class read_arr{

//         constructor(data){
//             this.val = data 
//             // console.log("from constructor method "+this.val)
//         }

//         even_num(){
//             // console.log("from even_num method "+this.val)
//           var ans1 =  this.val.filter((element)=>{
//                 return element%2==0
//             });

//             console.log(ans1);
                 
//         }

//         mul(){
//             // console.log("form mul method "+this.val);
//           var ans2 = this.val.map((element)=>{
//                 return element*5
//             });
//         console.log(ans2)

//         }

// }

// var a1 = new read_arr(arr1);
// a1.even_num()
// a1.mul();

// var a2 = new read_arr(arr2);
// a2.even_num();
// a2.mul();





var emp_info = [

    {name : "john",email:"john@gmail.com"},
    {name : "tom",email : "tom@gmail.com"}

]
var Job_Profile = [

    {profile : "john : HR"},
    {profile : "tom : Developer"}

]

class Read_emp_info{
    constructor(data){
        this.val = data
    }

    emp_name(){
        this.val.map((element)=>{
            document.write(element.name+"<br>");
        });
    }

    emp_email(){
        this.val.map((element)=>{
            document.write(element.email+"<br>");
        })
    }
    emp_profile(z){
        z.map((element)=>{
            document.write(element.profile+"<br>")
        })
    }

}

var b1 = new Read_emp_info(emp_info);
b1.emp_name();
b1.emp_email();

var b2 = new Read_emp_info();
b2.emp_profile(Job_Profile);






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










