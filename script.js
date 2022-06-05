var input  = document.getElementById("inputbox");
var num1 = 0;
var num2 = 0; 
function keys(value){
    var keys = [0,1,2,3,4,5,6,7,8,9,"."];
    var i;
    // checking the entered character is number/dot or not
    var patternDot = /\./;
    for(i=0;i<keys.length;i++){
        if(value == keys[i]){
            if(value == "."){
                if(patternDot.test(input.innerText)){
                    return false;
                }else if(input.innerText==""){
                    input.innerText = "0.";
                }else{
                    input.innerText +=value;
                }   
            }else{
                input.innerText += value;
            }       
        }
    }

    // clear the display label
    if(value=="ce"){
        input.innerText = "";
    }
    if(value =="c"){
        input.innerText = "";
        label1.innerText = "";
    }
    if(value=="x"){
        let lengthChars = input.innerText.length;
        let chars = input.innerText.slice(0,lengthChars-1);
        input.innerText = chars;
    }
    // adds the number and opertor to label one from label with id of inputbox.
    if(value == "+" || value=="-" || value=="*" || value=="/" || value=="%" || value=="^"){
        if(input.innerText==""){
            return false;
        }else{
            num1 = parseFloat(input.innerText);
            label1.innerText = input.innerText+value;
            input.innerText = "";
        }
    }
    if(value=="√"){
        num1 = Math.sqrt(parseFloat(input.innerText));
        label1.innerText = value+input.innerText;
        input.innerText = num1;
    }
    if(value=="1/x"){
        num1 = 1/parseFloat(input.innerText);
        label1.innerText = "1/"+input.innerText;
        input.innerText =num1; 
    }
    if(value=="=" || value == "Enter"){equal();}    
}
// equalation functions are here
function equal() {
    let opertor = label1.innerText.split("");
    num2 = parseFloat( input.innerText);
    label1.innerText += input.innerText;
    switch (opertor.pop()) {
        case "+":
            input.innerText = num1+num2;
            break;
        case "-":
            input.innerText = num1-num2;
            break;
        case "*":
            input.innerText = num1*num2;
            break;
        case "/":
            input.innerText = num1/num2;
            break;
        case "%":
            input.innerText = num1%num2;
            break;
        case "^":
            input.innerText = power(num1,num2);
            break;
        default:
            break;
    }
}
// why it is not working
function power(num1,num2){
    let value = 1;
    if(num2==0){
        return 1;
    }else{
        return num1*power(num1,num2-1);
    }
}
