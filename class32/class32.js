// // Q.s : 1  
// var newReleases = [
//     {
//     "id": 70111470,
//     "title": "Die Hard",
//     "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//     "rating": [4.0],
//     "bookmark": []
//     },
//     {
//     "id": 654356453,
//     "title": "Bad Boys",
//     "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//     "rating": [5.0],
//     "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//     "id": 65432445,
//     "title": "The Chamber",
//     "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//     "rating": [4.0],
//     "bookmark": []
//     },
//     {
//     "id": 675465,
//     "title": "Fracture",
//     "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//     "rating": [5.0],
//     "bookmark": [{ id: 432534, time: 65876586 }]
//     }
//     ]
    // 1- read only id and title and push into blank array 
    // 2-  print bookmark which has a data 
    // 3 -  print rating if it is greater than 4
    
    
    // var ans1=newReleases.map((element)=>{ 
    //         // return element.id + element.title+"<br>"; 
    //         return `id is:-${element.id}<Br> and tilte is:-${element.title}`
    // }) 
    // document.write(ans1);
    // console.log(ans1); 
    // let arr2=[];
    //     arr2.push(ans1);
    //   document.write(arr2); 

  

    //   var ans2=newReleases.filter((element)=>{

    //     return element.bookmark>0;
    //   })
    // document.write(ans2);
    

    // var ans3=newReleases.filter((element)=>{

    //     return element.rating>4;
    //   })
    // document.write(ans3);
    

    // Q.s 2 
//  var = [
//     {
//     id : 1,
//     name :"abc"
//     },
//     {
//     id : -2,
//     name :"pqr"
//     },
//     {
//     id : -1,
//     name :"xyz"
//     },
//     {
//     id : 2,
//     name :"mno"
//     },
    
    
//     ]
//     // print positive id only 

// new topic  advance js
// rest operator 
let add_num = (...nums)=>{
    console.log(nums);
  let final_ans =  nums.reduce((count,element)=>{
        return count = count+ element
    },0)

    document.write(`the final ans is :- ${final_ans} <br>`)
}
add_num(11,12,14,15,1567,098,67,3456,89,4567,34,124)
add_num(12,35);
add_num(9,9,8,6);
add_num(2);


let std_info = (name,sub1,email,...contact)=>{
    document.write(`${name} , ${sub1} ,${email}, ${contact} <br>`)
}
std_info("john","python","john@gmail.com",78787,909090,6767);
std_info("tom","php","tom@gmail.com",1234)