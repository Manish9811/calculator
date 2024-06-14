const options = document.querySelector("#options");
const button = document.querySelector("button");

const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");

const option = document.querySelectorAll("option");

let selectOperation = "+";

options.addEventListener('change' , () => {
    selectOperation = options.value;
})

button.addEventListener('click' , () => {
    document.getElementById('ans').style.color='black'

    
    if(value1 && value2){
        document.getElementById('ans').style.color='green'

        let result = eval(parseInt(value1.value) + selectOperation + parseInt(value2.value));
        if(result == 0){
            document.getElementById('ans').style.color='red'
            return document.getElementById('ans').innerHTML = "Note : 0 is not a number you may get error in this case";

        }
        if(!result){
            document.getElementById('ans').style.color='red'

            return document.getElementById("ans").innerHTML = "Please provide a valid number"

        }
        document.getElementById("ans").innerHTML = "Your ans is : " + result
    }
})