const button1 = document.querySelector(".first-button");
const page2 = document.querySelector('.page2');
const page1 =document.querySelector(".page1")
const button2 = document.querySelector(".buttt2");
const page3 = document.querySelector(".page3");
const butt2 = document.getElementById('b3')
 
button1.addEventListener("click", function(){
    page2.classList.remove("dont-show");
    page1.classList.add("dont-show")
    

})

button2.addEventListener("click", function(){
    page3.classList.remove("dont-show");
    page2.classList.add("dont-show");
})



butt2.addEventListener("click", function(){
    window.location.reload();
})

function result(){
    var name = "";
    var age = "";
    
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    let name1 = document.getElementById("namee");
    name1.textContent = name;
    let age1 = document.getElementById("agee");
    age1.textContent= age;
    let ageindayss;
    ageindayss = age * 365;
    ageindayss1 = document.getElementById("days");
    ageindayss1.textContent =ageindayss;
    
}
















