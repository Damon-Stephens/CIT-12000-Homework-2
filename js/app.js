
var answer=document.body.querySelector(".answer")

//Conditional of the program//

var num_one=Number(prompt("Enter the first number"));

if (Number.isNaN(num_one)){
    answer.innerHTML="That is not a number please refresh.";
    die;
}

var operator=(prompt("Enter the operator you wish to use"))

if(operator=="+"||operator=="-"||operator=="*"||operator=="/"){

}else {
    answer.innerHTML="That is not an operator please refresh.";
    die;
}

var num_two=Number(prompt("Enter the second number"));

if (Number.isNaN(num_two)) {
    answer.innerHTML="That is not a number please refresh.";
    die;
}

if (operator=="+") {
    var final_add=(num_one + num_two);
    answer.innerHTML=`The answer is ${final_add}`;
}else if (operator=="-") {
    var final_sub=(num_one - num_two);
    answer.innerHTML=`The answer is ${final_sub}`;
}else if (operator=="*") {
    var final_mult=(num_one * num_two);
    answer.innerHTML=`The answer is ${final_mult}`;
}else if (operator=="/") {
    var final_div=(num_one / num_two);
    answer.innerHTML=`The answer is ${final_div}`;
}




