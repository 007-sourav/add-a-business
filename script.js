// add a friend feature with the same button 
// focus : to understand Dom

var ist = document.querySelector("h5");



var btn =document.querySelector("#add");
// #add for selecting button's id

var check=0;


btn.addEventListener("click",function(){
    
    if(check ==0){
        ist.innerHTML="Business Partner";
        ist.style.color="green";
        console.log("hi hi business");
        btn.innerHTML="remove business";
        check=1;
        return;
    }else{
        ist.innerHTML="not-business";
        ist.style.color="red";
        console.log("not business");
        btn.innerHTML="add business";
        check=0;
        return;
    }
    
})


