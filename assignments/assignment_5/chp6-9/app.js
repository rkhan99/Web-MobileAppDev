// task1
var a =10;
document.write("Result: <br>");
document.write("The value of a is: " + a + "<br>................................." + "<br><br>The value of ++a is: " + ++a + "<br>Now the value of a is: " +  a + "<br><br>The value of a++ is: " + a++ + "<br>Now the value of a is: " + a + "<br><br>The value of --a is: " + --a + "<br>Now the value of a is: " + a + "<br><br>The value of a-- is: " + a-- + "<br>Now the value of a is: " + a);


// task2
var a = 2,b = 1;
var t1 = --a;
var t2 = t1 - --b;
var t3 = t2 + ++b;
var result = t3 + b--;
document.write("a is: " + a + "<br>b is: " + b + "<br>result is: " + "<br>stage 1: " +  t1 + "<br>stage 2:" + t2 + "<br>stage 3: " + t3 + "<br>final result: " + result);


// task3
var name = prompt("Your name?");
document.write("Hello " + name + "!");


// task5
var num = prompt("Enter a number to view the multiplication table", 5);
document.write("Multiplication Table of " + num + "<br><br>")
for(i = 1; i<=10;i++){
    document.write("<br>" + num + " x " + i + " = " + num*i);
}


// task6
var s1 = prompt("Enter Subject 1", "english");
var s2 = prompt("Enter Subject 2", "maths");
var s3 = prompt("Enter Subject 3", "urdu");
var tm = 100;
var m1 = +prompt("Enter Subject 1 Marks",50);
var m2 = +prompt("Enter Subject 2 Marks",50);
var m3 = +prompt("Enter Subject 3 Marks",50);
var p1 = (m1/tm)*100;
var p2 = (m2/tm)*100;
var p3 = (m3/tm)*100;
var tp = (p1+p2+p3)/3;
var tsm =  m1+m2+m3;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+s1+"</td><td>"+tm+"</td><td>"+ m1 +"</td><td>"+p1+"%"+"</td></tr><tr><td>"+s2+"</td><td>"+tm+"</td><td>"+m2+"</td><td>"+p2+"%"+"</td></tr><tr><td>"+s3+"</td><td>"+tm+"</td><td>"+m3+"</td><td>"+p3+"%"+"</td></tr><tr><td></td><td>"+tm*3+"</td><td>"+tsm+"</td><td>"+tp+"</td></tr></table>")
