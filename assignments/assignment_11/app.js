//questions and answers for quiz
var ques = ["What is the capital of Chile?", "What did the Romans call Scotland?" , "How many players are there in a rugby league team?", "What is the middle name of Angela Merkel?","What is the chemical formula for Table Salt?", "Who is the only musician ever to have been awarded the Nobel prize for literature?", "Which club won the 2017 UEFA Super Cup?"," Where would you find the River Thames?", "What is the smallest country in the world?", " In tennis, what piece of fruit is found at the top of the men's Wimbledon trophy?"];
var answers = ["Santiago","Caledonia",13,"Dorothea","NaCl","Bob Dylan","Real Madrid","London","Vatican City","Pineapple"];
var wronganswers = [["Slovakia", "Sparta", "Alexandria"],[4,7,11],["Olivia","Emilia","Jessica"],["Na2Cl","Na2O3","HCl"],["Elvis Presley","Paul Mccartney","Bob Marley"],["Barcelona","Athletico Madrid","Valencia"],["Paris", "NewYork","Toronto"],["Papua New Guinea", "Madagascar", "Tuvalu"],["orange","kiwi","jackfruit"]];
var btn2 = document.getElementById("done");
var btn1 = document.getElementById("next");
var i = 0;
var score = 0;
btn2.style.visibility = "hidden";
btn1.disabled = true;
//random option selection
function random() {
    var random = Math.random();
    var num = Math.floor((random * 4)+1);
    return num;
}


//next question
function next() {
    for(i = 0; i<(ques.length-1);i++) {
        var q = document.getElementById("question");
        if(q.innerHTML === ques[i]) {
            i=i+1;
            q.innerHTML = ques[i];
            var numbers = [1,2,3,4];
            var n = random();
            var id = "ans-"+n;
            var ans = document.getElementById(id);
            ans.innerHTML = answers[i];
            ans.className = "btn btn-primary btn-block btn-lg text-light text-center";
            ans.disabled = false;
            for(var j=1;j<5;j++) {
                if(j===n) {
                    numbers.splice((n-1),1);
                }
            }
            for(var k=0; k<numbers.length;k++) {
                var no = numbers[k];
                var id2 = "ans-"+no;
                i=i-1;
                var a = document.getElementById(id2);
                var wronganswer = wronganswers[i];
                a.innerHTML = wronganswer[k];
                a.disabled = false;
                a.className = "btn btn-primary btn-block btn-lg text-light text-center";
                i=i+1;
            }
            return i;
        }
        //last question format
        if(i === 9) {
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "visible";

        }
    }
}


//completing quiz button
function done() {
    alert("You have completed the quiz\nYour score is: "+score+" out of 10");
    location.reload();
}


//checking answer
function checkans(x) {
    var ID = "ans-"+x;
    var node = document.getElementById(ID);
    var ids = [1,2,3,4];
    node.className = "btn btn-danger btn-block btn-lg text-light text-center"
    if(node.innerHTML === answers[i]) {
        score++;
    }
    for(var l = 1;l<5;l++) {
        if(l===x) {
            ids.splice(x-1,1);
        }
    }
    for(var m =0;m<ids.length;m++) {
        var z = ids[m];
        var y = "ans-"+z;
        var e = document.getElementById(y);
        e.disabled = true;
    }
    btn1.disabled = false;
    if(i===9) {
        btn1.style.visibility = "hidden";
        btn2.style.visibility = "visible"
    }
    
}