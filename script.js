document.getElementById("click-btn").addEventListener('click',function(){
    const outputCode = document.getElementById("output-code");
    // const random = Math.floor((Math.random()*(1+9999-1000))+1000);
    const random = Math.round((Math.random()*9000)+1000);
    outputCode.value = random;
    
})

// const  butoonparent = document.querySelectorAll('.calc-button-row');
// console.log(butoonparent);
// butoonparent.forEach(keypad =>keypad.addEventListener('click',function(e){
//     const cureentBtn = e.target.innerText;
//     const currentValue = resultVeiw.value;
//     if(currentValue == ''){
//         resultVeiw.value = cureentBtn;
//     }else{
//         resultVeiw.value = currentValue + cureentBtn;
//     }
// }))
// function numberDigitFixed(fixed){
    
// }

const resultVeiw = document.getElementById("result");
function buttonClick(num){
    const numberDigitFixed = document.getElementById('result').value;
    if(numberDigitFixed.length<4){
        resultVeiw.value += num;
    }
}
function backSpace(){
    let backSpace= resultVeiw.value.slice(0,-1);
   resultVeiw.value= backSpace;
}
function buttonCancel(){
    let buttonCancel = ('');
    resultVeiw.value = buttonCancel;
    document.getElementById('pin-unvalued').style.display = 'none';
    document.getElementById('pin-valued').style.display = 'none';
    
}


let count = 3;
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click",function(){
    // document.querySelector(".submit-btn").style.backgroundColor = "red";
    const randomValue =  document.getElementById("output-code").value;
    const submitValue = resultVeiw.value;
    const tryWarring = document.getElementById('try');
    const rightNotify = document.getElementById('pin-unvalued');
    const wrongNotify = document.getElementById('pin-valued');
    if(randomValue === ''){
        wrongNotify.style.display = 'none';
        rightNotify.style.display = 'none';
        swal({
            title: "warning!",
            text: "Please Let me know your Generate pin. ",
            icon: "warning",
            button: "Opp ..!",
          });
        
    }else if(submitValue === ''){
        wrongNotify.style.display = 'none';
        rightNotify.style.display = 'none';
        swal({
            title: "warning!",
            text: "You did not enter your code. ",
            icon: "warning",
            button: "Opp ..!",
          });

    }else if(randomValue === submitValue){
        rightNotify.style.display = 'block';
        count = 3;
        tryWarring.innerText= count;

    }else {
        wrongNotify.style.display = 'block';
        rightNotify.style.display = 'none';
        count--;
        tryWarring.innerText =count;

    }if(count == 0){
        submitBtn.disabled  = true;
        submitBtn.style.backgroundColor = 'red';
        wrongNotify.style.display = 'none';
        swal({
            title: "Failed!",
            text: "Your submission is failed",
            icon: "error",
            button: "Opp ..!",
          });
    }
})

