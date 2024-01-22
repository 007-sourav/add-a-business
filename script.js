// add a friend feature with the same button 
// focus : to understand Dom

var ist = document.querySelector("h5");



var addbusinesss =document.querySelector("#add");
// #add for selecting button's id

addbusinesss.addEventListener("click",function(){
    ist.innerHTML="Business Partner";
    ist.style.color="green";
})

var removebusiness = document.querySelector("#remove");

removebusiness.addEventListener("click",function(){
         ist.innerHTML="not-business";
         ist.style.color="red";
})
