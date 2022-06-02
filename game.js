num1 = Math.random(1, 100).toFixed(2);
num2 = Math.random(1,100).toFixed(2);

function start(){

    document.getElementById("question").innerHTML = num1 + "+" + num2 + "= : ";

}

function submit(){

    if (document.getElementById("answer_box") == num1 + num2){

        document.getElementById("result").innerHTML = "Correct. Press start for a new question.";

    } else{

        document.getElementById("result").innerHTML = "Incorrect. Try Again.";

    }

}