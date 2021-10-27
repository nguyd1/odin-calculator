const numbers=document.querySelectorAll(".number");
const display=document.querySelector(".display");
const clear=document.querySelector(".clear");

let num="";
numbers.forEach(number=>{
    number.addEventListener("click",()=>{
        num+=number.id;
        display.textContent=num;
    });
})

clear.addEventListener("click",()=>{
    num="0";
    display.textContent=num;
});

