// // main class 
// class Employee{
//   constructor(name,email,job_profile,joining_date){
//     this.name_pro=name; 
//     this.email_pro=email;
//     this.profile_pro=job_profile;
//     this.date_pro=joining_date;
//   } 
//   emp_name_email(){
//   return "emp name_is"+this.name_pro +"and emp email is"+this.email_pro+"<br>"
//   }
//   profile_info(){
//     return "emp job profile is"+this.profile_pro+"and emp joining date is"+this.date_pro+"<br>"
//   }
// } 

// // child class or sub class 
// class designer extends Employee{
//     constructor(name,email,job_profile,joining_date,tool){
//     super(name,email,job_profile,joining_date);
//         this.tool_pro=tool;
//     } 
//     final_reading(){
//         return super.emp_name_email()+super.profile_info()+"tool name is:"+this.tool_pro+"<br>";
//     }
// } 



// class programmer extends Employee{
//     constructor(name,email,job_profile,joining_date,language){
//         super(name,email,job_profile,joining_date,)
//         this.language_pro=language;
//     } 
//     final_reading(){
//         return super.emp_name_email()+super.profile_info()+"language name is"+this.language_pro+"<Br>"
//     }
// } 

// var tom=new designer("tom","tom@gmail.com","ui/ux","3/4/56","photoshop",tool="no idea");
// console.log(tom); 
// console.log(tom.final_reading()); 

// class animals{
//     construnctor(name){
//         this.name=name;
//     }
// }
// class dog extends animals{
//     constructor(name,breed){
//        super(name)

//         this.breed_dog=breed;
//     }
// }  
// var a1=new dog("puppy","bhoora");
// console.log(a1); 


class person{
    constructor(){
    if(this.constructor==person){
        throw new Error("you can not use main class contructor or other method")
    } 
    }
    info(){
        throw new Error("cannot read info from abstract class")
    }
} 
class Teacher extends person(){
    info(){
        super.info();
        console.log("she is maths teacher")
    }
} 
var teacher1=new Teacher(); 
teacher1.info();








