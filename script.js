function operate(num1,operation,num2){
    if(operation==="/") return Number(num1)/Number(num2);
    if(operation==="*") return Number(num1)*Number(num2);
    if(operation==="-") return Number(num1)-Number(num2);
    if(operation==="+") return Number(num1)+Number(num2);
}

const numbers=document.querySelectorAll(".number");
const display=document.querySelector(".display");
const clear=document.querySelector(".clear");
const operators=document.querySelectorAll(".operator");
const equal=document.querySelector(".equal");
const negate=document.querySelector(".negate");
const fraction=document.querySelector(".fraction");

let num="";
let arr=new Array();

numbers.forEach(number=>{
    number.addEventListener("click",()=>{
        num+=number.id;
        display.textContent=num;
    });
})

clear.addEventListener("click",()=>{
    num="";
    arr=[];
    display.textContent="";
});

operators.forEach(operator=>{
    operator.addEventListener("click",()=>{
        arr.push(num);
        num="";
        if(arr.length===3){
            num=operate(arr[0],arr[1],arr[2]);
            console.log(num);
            display.textContent=num;
            arr=[];
            arr.push(num);
            num="";
        } 
        arr.push(operator.id);
    });
});

equal.addEventListener("click",()=>{
    arr.push(num);
    num="";
    if(arr.length===3){
        num=operate(arr[0],arr[1],arr[2]);
        arr=[];
        display.textContent=num;
    }
});

negate.addEventListener("click",()=>{
    num*=-1;
    display.textContent=num;
});

fraction.addEventListener("click",()=>{
    num/=100;
    display.textContent=num;
});