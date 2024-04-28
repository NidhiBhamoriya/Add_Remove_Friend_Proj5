var istatus= document.querySelector("h5")


var btn= document.querySelector("#add")

var flag=0;

btn.addEventListener("click",()=>{
    if(flag==0){
        istatus.innerHTML= "Friends"
        istatus.style.color= "green"
        btn.innerHTML="Remove Friend"
        btn.style.padding="10px 10px"            
        flag=1;
    }
    else{
        istatus.innerHTML= "Stranger"
        istatus.style.color= "red"
        btn.innerHTML="Add Friend"
        btn.style.padding="10px 23.5px"
        flag=0;
    }    
})




