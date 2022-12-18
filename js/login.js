let button=document.getElementById("btn");
let cred=document.getElementById("log");
let cont=document.getElementById("if");
let pass=document.getElementById("password");
let data=JSON.parse(localStorage.getItem("sigin"))||[];
let form=document.getElementById("myForm");
let logindata=JSON.parse(localStorage.getItem("sigin"))||[]
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formData={
        email:form.newcred.value,
        password:form.newpass.value
    }
    data.push(formData);
    console.log(data);
    localStorage.setItem("sigin",JSON.stringify(formData));
    window.location.assign("index.html");
})
button.addEventListener("click",()=>{
        if(cred.value=="admin@gmail.com"){
            if(pass.value=="1234"){
                cont.innerHTML=null;
                window.location.assign("index.html")
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
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


