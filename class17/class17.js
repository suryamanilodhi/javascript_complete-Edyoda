var postobj={
    id:1,
    title:"hello javascript",
    body:"we are doing ajax in js",
    img:"img4.jpg"
} 
// console.log(typeof(postobj));
var post=JSON.stringify(postobj); 
// console.log(post); 
// console.log(typeof(post));

var url="https://jsonplaceholder.typicode.com/posts"

var a=new XMLHttpRequest(); 
a.open("post",url,true);
// basically when you pass the data to the live server it will ask what king of data you are passing
// so we use this 
// it  shows that your data is not a havy data its a json applicartion only 
a.setRequestHeader("content-type","application/json"); 

// we use parameter inside send because we are sending data 
a.send(post) 
a.onreadystatechange=function(){
    // we use status 201 when we post somethig
    if(this.status==201 && this.readyState==4){
        console.log("post created")
        console.log(this.responseText);
    }
}