const button1 = document.querySelector(".first-button");
const page2 = document.querySelector('.page2');

button1.addEventListener("click",function(){
    const html1 = `
    <div class="head2">
        <h1 class="headd2">Age Calculator</h1>
    </div>
    <div class="detail">
        <div>
            <p class="enter">Please enter name and age below</p>
        </div>
        <form class="inputs">
            <input class="inn" id="name" placeholder="Enter your full name...">
            <input class="inn" id="age" placeholder="Enter your Age...">                    
        </form>
        <div class="butt2">
            <button class="buttt2" id="b2">Click ME</button>
        </div>
    </div>
`;

    page2.innerHTML = html1;

    const button2 = document.querySelector(".buttt2");
    const page3 = document.querySelector(".page3");

    button2.addEventListener("click", function(){
        const html2 =`<div class="head2">
        <h1 class="headd3">Age Calculator</h1>
    </div>
    <div class="details" id="">
        <div class="para">
            <p class="res">Here is your result dear!</p>
        </div>
        <div class=" res-box">
            <p class="Res1">Name : <span class="nameres" id="namee"></span></p> 
            <p class="Res1">Your Age is :<span class="ageres" id="agee"></span></p> 
            <p class="Res1">The Number of Days you lived is : <span class="daysres"id="days"></span></p> 
        </div>
        <div class="butt3">
            <button class="buttt3" id="b3">Back</button>
        </div>
    </div>`;
    page3.innerHTML =html2 ;

    let name = document.getElementById("name").value;
    let age  = document.getElementById("age").value;
    if (name =='' || age  =='' ) {
      alert('please you must fill all fields');
    }
    let name1 = document.getElementById("namee");
    name1.textContent = name;
    let age1 = document.getElementById("agee");
    age1.textContent= age;
    let ageindayss;
    ageindayss = age * 365;
    ageindayss1 = document.getElementById("days");
    ageindayss1.textContent =ageindayss;
    
    butt2 = document.getElementById('b3')
    butt2.addEventListener("click", function(){
      window.location.reload();
    })

    });


});















