
if(localStorage.getItem('sessionUsername')== null){
    location.replace("./index.html")
}else{

    var xxmg= document.getElementById("welMsg")
    let namee= localStorage.getItem("sessionUsername")
    xxmg.innerHTML="Wellcome Ya " +namee 
    
    let logout= document.getElementById("logout")
   
    logout.addEventListener("click",clearSession() )
    
}

function clearSession(){
    localStorage.removeItem("sessionUsername")
}