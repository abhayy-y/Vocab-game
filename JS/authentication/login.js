const password = document.querySelector("#password");
const img = document.querySelector("img");

// change the images of togglepassword later

img.addEventListener("click",(e)=>{
e.preventDefault();
    if(password.type === "password"){
        password.type = "text";
        img.src = "./assets/icons/eye-open.png"
    }
    else{
        password.type = "password";
        img.src = "./assets/icons/hidden.png"
    }
})