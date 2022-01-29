fetch("data.json").then(res=>res.json()).then(
    data =>
   // console.log(data)
    display(data.profile)
)
function display(ITI){
var cdeck=document.querySelector(".card-deck")
console.log(cdeck)

//
for(var i in ITI){
    var cd=document.createElement("div")
cd.classList.add("card")
console.log(cd)
cdeck.appendChild(cd)
    console.log(ITI[i].branch)
   
//img
var im=document.createElement("img")
im.src=ITI[i].img;
cd.appendChild(im)
//name
 //name
 var name=document.createElement("h1")
 name.textContent=ITI[i].name;
 cd.appendChild(name)
 //branch area
 var branch=document.createElement("h2")
 branch.textContent=ITI[i].branch;
 cd.appendChild(branch)
 //year area
 var yr=document.createElement("h3")
 yr.textContent=ITI[i].year;
 cd.appendChild(yr)
//button area
var bt=document.createElement("a")
bt.classList.add("btn-info")
bt.textContent="google";
bt.href="https://www.google.com";
cd.appendChild(bt)

}
}
