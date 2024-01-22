// add a friend feature with the same button 
// focus : to understand Dom

var ist = document.querySelector("h5");



var addbusinesss =document.querySelector("#add");
// #add for selecting button's id

var check=0;


addbusinesss.addEventListener("click",function(){
    
    if(check ==0){
        ist.innerHTML="Business Partner";
        ist.style.color="green";

        check=1;
        return;
    }else{
        ist.innerHTML="not-business";
        ist.style.color="red";
        check=0;
        return;
    }
    
})


