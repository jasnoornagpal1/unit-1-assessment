/*----- constants -----*/

/*----- app's state (variables) -----*/
// the count display will change according to the input amount
let count = 0;

/*----- cached element references -----*/
let input = document.getElementById("input");
let countDisplay = document.getElementById("countDisplay");
let counterMinusBtn = document.getElementById("counter-minus");
let counterPlusBtn = document.getElementById("counter-plus")

/*----- event listeners -----*/
//if plus button clicked, take input value and add to count inner html
//if minus btn clicked, the input value is subtracted from the count value
// input -> add button -> add to count
counterMinusBtn.addEventListener("click", ()=>{
    count--;
    newCount();
});

newCount();

counterPlusBtn.addEventListener("click",()=>{
    count++;
    newCount();
    console.log(count)
});

/*----- functions -----*/
function newCount(){
    countDisplay.innerHTML = count;
}