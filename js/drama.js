let data=JSON.parse(localStorage.getItem("drama"))||[];
let cont=document.getElementById("container")
console.log(data);
display(data);
function display(data){
    data.forEach((element) => {
        let divimg=document.createElement("div");
        divimg.setAttribute("class","card");
        let image=document.createElement("img");
        image.setAttribute("src",element.image);
        let divdes=document.createElement("div");
        divdes.setAttribute("class","overlay");
        let p=document.createElement("p");
        p.innerText=element.name;
        let button=document.createElement("button");
        button.setAttribute("class","carbtn");
        button.innerText="Watch";
        let i=document.createElement("i");
        i.setAttribute("class","fa-solid fa-share-nodes");
        i.innerText="Share";
        divdes.append(p,button,i);
        divimg.append(image,divdes);
        cont.append(divimg);
    });
}