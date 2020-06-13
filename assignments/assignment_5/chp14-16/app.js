// task1
var students = new Array();

// task2
var student = [];

// task3
var str_array = new Array("My", "name", "is", "khan");


// task4
var int_array = new Array(1,3,5,7);


// task5
var bol_array = new Array(0,1,false,true);


// task6
var mix_array = new Array("hello",2,false, "world");


// task7
var qualifications = new Array("SSC", "HSC", "BCS", "BCOM", "BS", "MS", "M.Phil","PHD");
document.write("<h1>Qualifications: </h1><br><br>");
for(i=0; i< qualifications.length ; i++){
    document.write( i+1+ ") " + qualifications[i] + "<br>");
}


// task8
var names = new Array("Micheal", "John", "Tony");
var score = new Array(320,230,480);
var total_score = 500;
var per = new Array((score[0]/total_score)*100, (score[1]/total_score)*100, (score[2]/total_score)*100);
document.write("Score of Micheal is " + score[0] + ". Percentage is " + per[0] + "%<br>");
document.write("Score of John is " + score[1] + ". Percentage is " + per[1] + "%<br>");
document.write("Score of Tony is " + score[2] + ". Percentage is " + per[2] + "%");


// task9
var colors = new Array("red", "blue", "yellow", "green", "purple", "pink");
alert(colors);
var beg_color = prompt("Enter color to add to the beginning of the list");
colors.unshift(beg_color);
alert(colors);
var end_color = prompt("Enter color to add to the end of the list");
colors.push(end_color);
alert(colors);
colors.unshift("indigo", "violet");
alert(colors);
colors.shift()
alert(colors);
colors.pop()
alert(colors);
var index_color = +prompt("choose an index to add a color");
var insert_color = prompt("Enter the color to add at the chosen index");
colors.splice(index_color,0,insert_color);
alert(colors);
var del_index = +prompt("choose index to delete color(s)");
var del_color = +prompt("Enter number of color(s) to delete");
colors.splice(del_index,del_color);
alert(colors);



// task10
var scores = [320,230,480,120];
document.write("Scores of Students: " + scores + "<br>");
document.write("Ordered Scores of Students: " + scores.sort());



// task11
var cities = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selected_cities = cities.slice(0,3);
document.write("Cities list:<br>" +cities+"<br><br>Selected cities list: <br>" +selected_cities);



// task12
var new_array = new Array("This","is","my","cat");
var string = new_array.join(" ");
document.write("Array: <br>" + new_array +"<br><br>String: <br>"+string);



// task13
var array = [];
array.push("keyboard");
array.push("mouse");
array.push("printer");
array.push("monitor");
document.write("Devices: <br>"+array+"<br><br>");
document.write("Out: <br>"+array.shift()+"<br>");
document.write("Out: <br>"+array.shift()+"<br>");
document.write("Out: <br>"+array.shift()+"<br>");
document.write("Out: <br>"+array.shift()+"<br>");



// task14
var array = [];
array.push("keyboard");
array.push("mouse");
array.push("printer");
array.push("monitor");
document.write("Devices: <br>"+array+"<br><br>");
document.write("Out: <br>"+array.pop()+"<br>");
document.write("Out: <br>"+array.pop()+"<br>");
document.write("Out: <br>"+array.pop()+"<br>");
document.write("Out: <br>"+array.pop()+"<br>");



// task15
var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
document.write("<select><option>"+phone[0]+"</option><option>"+phone[1]+"</option><option>"+phone[2]+"</option><option>"+phone[3]+"</option><option>"+phone[4]+"</option><option>"+phone[5]+"</option></select>");