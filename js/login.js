let button=document.getElementById("btn");
let cred=document.getElementById("log");
let cont=document.getElementById("if");
let pass=document.getElementById("password");
button.addEventListener("click",()=>{
    
    if(cred.value=="subiradhikari181@gmail.com"){
        if(pass.value=="1234"){
            cont.innerHTML=null;
            alert("Log In Successful")
        }else{
            let p=document.createElement("p");
            p.innerText="Check Your Password";
            cont.append(p);
        }
    }else{
        cont.innerHTML=null;
        let p=document.createElement("p");
            p.innerText="Check Your Email";
            cont.append(p);
    }
})