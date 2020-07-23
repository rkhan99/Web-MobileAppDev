// task1
var character = prompt("Enter a character");
var type = isNaN(character);
if(type === false){
    document.write("Given character is a number");
}
else if(type === true){
    for(i=65; i<=90; i++){
        if(character.charCodeAt() === i){
            document.write("Given character is an Uppercase letter");
        }
        else{
            continue;
        }
    }
    for(j=97; j<=122; j++){
        if(character.charCodeAt() === j){
            document.write("Given character is a Lowecase Letter");
        }
        else{
            continue;
        }
    }

}


// task2
var integer1 = +prompt("Enter first integer: ");
var integer2 = +prompt("Enter second integer: ");
if(integer1 > integer2){
    document.write(integer1 + " is larger!");
}
if(integer2 > integer1){
    document.write(integer2 + " is larger!");
}
if(integer1 === integer2){
    document.write("Both integers are equal");
}


// task3
var num = +prompt("Enter a number");
if(num > 0){
    document.write("Given number is positive");
}
if(num < 0){
    document.write("Given number is negative");
}
if(num == 0){
    document.write("Given number is zero");
}


// task4
var character = prompt("Enter any character");
var type = isNaN(character);
if(type === false){
    document.write("Please enter a letter.");
}
else if(type === true){
    character = character.toLowerCase();
    if(character.charCodeAt() === 97 || character.charCodeAt() === 101 || character.charCodeAt() === 105 || character.charCodeAt() === 111 || character.charCodeAt() === 117){
        document.write("Given character is a vowel");
    }
    else{
        document.write("Given character is not a vowel");
    }
}


// task5
var password = "donaldtrump";
var inp = prompt("Enter your password");
if(inp === ""){
    alert("Please Enter password");
}
else if(inp === password){
    alert("Correct! The password you enetrs matches the original password");
}
else{
    alert("Incorrect password");
}


// task6
var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
} //added closing braces.
else{ 
    greeting = "Good evening"; 
}


// task7
var time = +prompt("Enter time in 24hr format (1900)");
if(time>= 0000 && time < 1200){
    alert("Good Morning!");
}
else if(time>=1200 && time<1700){
    alert("Good Afternoon!");
}
else if(time>=1700 && time <2100){
    alert("Good Evening!");
}
else if(time>=2100 && time <2359){
    alert("Good Night!");
}
