let buttons = document.querySelectorAll("button");
let result = document.querySelector("input");

buttons.forEach(function(button){
    button.addEventListener("click",count);
})

function count(evant){
    let buttonValue = evant.target.value;
    
    
    if(buttonValue == "C"){
        result.value ="";
    }else if(buttonValue == "prev"){  //to fix
        let newResult = result.value;
        result.value = newResult;
        console.log(typeof newResult)
        console.log(result.value[2]);
    }else if(buttonValue == "="){
        result.value =eval(result.value);
    }else{
        result.value +=buttonValue; 
    }
}