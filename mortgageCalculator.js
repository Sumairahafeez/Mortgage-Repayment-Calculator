let button = document.querySelector(".button");
let Amount = document.querySelector("#Mortgage-Amount")
let Year = document.querySelector('.year')
let percentage = document.querySelector('.percent')
let Radio = document.querySelector(".Repayment")
let inerest = document.querySelector(".Interest")
let container = document.querySelector(".container")
createError = () =>{
    let error = document.createElement("div");
    error.style.width = "100%"
    error.style.height = "10%"
    error.style.fontSize = '16px';
    error.style.color = "hsl(4, 69%, 50%)";
    error.innerHTML = "This field is required";
    return error;
}
errorHandling = () =>{
    if(Amount.value == '')
        {   let error = createError();
            let euro = document.getElementById("EURO");
            euro.style.backgroundColor = "hsl(4, 69%, 50%)";
            euro.style.color = "white";
            let Parent1 = document.querySelector(".space")
            Parent1.appendChild(error);
            container.style.height = "80vh"
        }
        if(Year.value=='')
        {   let error = createError();
            let Symbol = document.querySelector(".Y");
            Symbol.style.backgroundColor =  "hsl(4, 69%, 50%)";
            Symbol.style.color = "white";
            let Parent = document.querySelector(".terminput")
            Parent.appendChild(error);
             container.style.height = "80vh"
        }
        if(percentage.value == '')
        {
            let error = createError();
            let Symbol = document.querySelector(".percent");
            Symbol.style.backgroundColor =  "hsl(4, 69%, 50%)";
            Symbol.style.color = "white";
            let Parent = document.querySelector(".rateinput")
            Parent.appendChild(error);
            container.style.height = "80vh"   
        }
        if(!Radio.ariaChecked || !inerest.ariaChecked)
        {
            let error = createError();
            let Symbol = document.querySelector(".percent");
            Symbol.style.backgroundColor =  "hsl(4, 69%, 50%)";
            Symbol.style.color = "white";
            let Parent = document.querySelector(".type")
            Parent.appendChild(error); 
            container.style.height = "80vh" 
        }
}
button.addEventListener('click',()=>{
    console.log(Amount.value)
    console.log(Year.value);
    errorHandling();

   
})