// task1
var name = prompt("Enter city name", "karachi");
if(name === "karachi"){
    document.write("Welcome to city of Lights!");
}

// task2
var gender = prompt("Enter your gender");
gender = gender.toLowerCase();
if (gender === "male"){
    document.write("Good morning Sir!");
}
if (gender === "female"){
    document.write("Good morining Ma'am!");
}


// task3
var color = prompt("Enter signal color");
color = color.toLowerCase();
if(color == "red"){
    document.write("Must stop");
}
if(color == "red"){
    document.write("Ready to Move");
}
if(color == "green"){
    document.write("Move Now");
}


// task4
var fuel = prompt("Enter remaining fuel in car (in litres)");
if (fuel < 0.25){
    document.write("Please refill the fuel in your car");
}


// task5
var a = 4;
if (++a === 5){ 
    alert("given condition for variable a is true"); //alert display
}
var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); //alert not display
}
var c = 12;
 if (c++ === 13){
     alert("condition 1 is true"); //alert not display
}
if (c === 13){
     alert("condition 2 is true"); //alert display
    } 
if (++c < 14){ 
    alert("condition 3 is true"); //alert not display
} 
if(c === 14){
     alert("condition 4 is true"); //alert display
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); //alert display
}
if (true){ 
    alert("True"); //alert display
} 
if (False){ 
    alert("False") //alert not display
}
if("car" < "cat"){ 
    alert("car is smaller than cat"); //alert display
}



// task6
var mo1 = +prompt("Enter subject 1 marks:");
var mo2 = +prompt("Enter subject 2 marks:");
var mo3 = +prompt("Enter subject 3 marks:");
var Tm = +prompt("Enter total marks: ");
var Om = mo1 + mo2 + mo3;
var per = (Om / Tm) * 100;
var grade;
var remarks;
if(per >= 80){
    grade = "A-one";
    remarks = "Excellent";
}
else if(per >= 70){
    grade = "A";
    remarks = "Good";
}
else if(per >= 60){
    grade = "B";
    remarks = "You need to improve";
}
else if(per < 60){
    grade = "Fail";
    remarks = "Sorry";
}
document.write("<h1>Marks Sheet</h1>" + "<br><br>Total Marks: " + Tm + "<br>Marks Obtained: " + Om + "<br>Percentage: " + per + "<br>Grade: " + grade + "<br>Remarks: " + remarks);


// task7
var num = 8;
var guess = +prompt("Guess the secret number 0-10");
if(guess === num){
    document.write("Bingo! Correct answer.");
}
else if(guess+1 === num){
    document.write("Close enough to the correct answer");
}


// task8
var num = +prompt("Enter a number:");
if(num%3 === 0){
    document.write("The number is divisible by 3");
}


// task9
var num = +prompt("enter a number: ");
if(num%2 === 0){
    document.write("The number is an even number.");
}
else{
    document.write("The number is an odd number.");
}


// task10
var temp = prompt("Enter tempertaure in digits: ");
if(temp > 40){
    document.write("It is too hot outside");
}
else if(temp > 30){
    document.write("The weather today is normal");
}
else if(temp > 20){
    document.write("Today's weather is cool");
}
else if(temp > 10){
    document.write("OMG! Today's weather is so Cool");
}


// task11
var num1 = +prompt("Enter the first number: ");
var num2 = +prompt("Enter the second number: ");
var op = prompt("Enter the operator");
if(op === "+"){
    document.write(num1 + num2);
}
else if(op === "-"){
    document.write(num1 - num2);
}
else if(op === "*"){
    document.write(num1 * num2);
}
else if(op === "/"){
    document.write(num1 / num2);
}
else if(op === "%"){
    document.write(num1 % num2);
}
