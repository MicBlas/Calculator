let buttons = document.querySelectorAll("button");
let result = document.querySelector("input");
let arrayNumbers =[];

buttons.forEach(function(button){
    button.addEventListener("click",count);
})

function count(evant){
    let buttonValue = evant.target.value;
    
    
    if(buttonValue == "C"){
        result.value ="";
        arrayNumbers =[];
    }else if(buttonValue == "del"){  //to fix
       
        //use String Methods
        let newResult = result.value.substring(0,result.value.length-1);
        result.value =newResult;
        
        //use Object Methods
        /*let newResult = arrayNumbers.pop();  //arrayNumbers.splice(-1,1)
        let arrToNumber= arrayNumbers.join("");
        result.value =arrToNumber;
        
        console.log(typeof arrToNumber);
        console.log(arrToNumber);
        */
    }else if(buttonValue == "="){
        result.value =eval(result.value);
    }else{
        result.value +=buttonValue;
        arrayNumbers.push(buttonValue);
        console.log(typeof arrayNumbers);
        console.log(arrayNumbers);
    }
}