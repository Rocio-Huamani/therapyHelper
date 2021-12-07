// quizz maker
const question001 = ["<img src=images/images/cat.png height=280 /><br /><br />What is this?",
"<img src=images/images/dog.png height=280 /><br /><br />What is this?",
"<img src=images/images/cow.png height=280 /><br /><br />What is this?",
"<img src=images/images/bird.png height=280 /><br /><br />What is this?",
"<img src=images/images/chair.png height=280 /><br /><br />What is this?",
"<img src=images/images/cup.png height=280 /><br /><br />What is this?",
"<img src=images/images/glass.png height=280 /><br /><br />What is this?",
"<img src=images/images/house.png height=280 /><br /><br />What is this?",
"<img src=images/images/plate.png height=280 /><br /><br />What is this?",
"<img src=images/images/spoon.png height=280 /><br /><br />What is this?"
];

const options001 = ["<button class=buttons001 onclick=q1i()>dog</button><br /><br /><button class=buttons001 onclick=q1c()>cat</button>"];
const options002 = ["<button class=buttons001 onclick=q1c()>dog</button><br /><br /><button class=buttons001 onclick=q1i()>house</button>"];

const options003 = ["<button class=buttons001 onclick=q1c()>cow</button><br /><br /><button class=buttons001 onclick=q1i()>spoon</button>"];
const options004 = ["<button class=buttons001 onclick=q1i()>plate</button><br /><br /><button class=buttons001 onclick=q1c()>bird</button>"];
const options005 = ["<button class=buttons001 onclick=q1c()>chair</button><br /><br /><button class=buttons001 onclick=q1i()>cat</button>"];
const options006 = ["<button class=buttons001 onclick=q1c()>cup</button><br /><br /><button class=buttons001 onclick=q1i()>glass</button>"];
const options007 = ["<button class=buttons001 onclick=q1i()>house</button><br /><br /><button class=buttons001 onclick=q1c()>glass</button>"];
const options008 = ["<button class=buttons001 onclick=q1c()>house</button><br /><br /><button class=buttons001 onclick=q1i()>chair</button>"];
const options009 = ["<button class=buttons001 onclick=q1c()>plate</button><br /><br /><button class=buttons001 onclick=q1i()>bird</button>"];
const options010 = ["<button class=buttons001 onclick=q1i()>dog</button><br /><br /><button class=buttons001 onclick=q1c()>spoon</button>"];

let a = 0;
a++;
let b = 0;
b++;

function begin001() {
disappear001.innerHTML = "";
message001.innerHTML = question001[0];
message002.innerHTML = options001;
number001.innerHTML = a++;
}

function q1c() {
message003.innerHTML = "Correct";
message002.innerHTML = "";
score001.innerHTML = b++;
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q1i() {
message003.innerHTML = "Incorrect";
message002.innerHTML = "";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function next001() {
if (a == "2") {
    message001.innerHTML = question001[1];
    message002.innerHTML = options002;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}

else if (a == "3") {
    message001.innerHTML = question001[2];
    message002.innerHTML = options003;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}


else if (a == "4") {
    message001.innerHTML = question001[3];
    message002.innerHTML = options004;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}

else if (a == "5") {
    message001.innerHTML = question001[4];
    message002.innerHTML = options005;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}

else if (a == "6") {
    message001.innerHTML = question001[5];
    message002.innerHTML = options006;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}

else if (a == "7") {
    message001.innerHTML = question001[6];
    message002.innerHTML = options007;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}

else if (a == "8") {
    message001.innerHTML = question001[7];
    message002.innerHTML = options008;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}

else if (a == "9") {
    message001.innerHTML = question001[8];
    message002.innerHTML = options009;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}

else if (a == "10") {
    message001.innerHTML = question001[9];
    message002.innerHTML = options010;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
} else {
    message001.innerHTML = "End of Quiz";
    message002.innerHTML = "";
    message003.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
}
}

function repeat001() {
location.reload();
}

/*Math Test*/
const QMathTest = ["<img src=images/images/1.png height=280 /><br /><br />How many objects are here?",
            "<img src=images/images/3.png height=280 /><br /><br />How many objects are here?",
            "<img src=images/images/2.png height=280 /><br /><br />How many objects are here?",
            "<img src=images/images/5.png height=280 /><br /><br />How many objects are here?",
            "<img src=images/images/4.png height=280 /><br /><br />How many objects are here?",
            "<img src=images/images/9.png height=280 /><br /><br />How many objects are here?",
            "<img src=images/images/1.png height=280 /><br /><br />How many objects are here?",
            "<img src=images/images/6n.png height=280 /><br /><br />How many objects are here?",
            "<img src=images/images/10.png height=280 /><br /><br />How many objects are here?",
            "<img src=images/images/9.png height=280 /><br /><br />How many objects are here?"
        ];

        const optionsmath1 = ["<button class=buttons005 onclick=wrong()>2</button><br /><br /><button class=buttons005 onclick=correct()>1</button>"];
        const optionsmath2 = ["<button class=buttons005 onclick=correct()>3</button><br /><br /><button class=buttons005 onclick=wrong()>2</button>"];

        const optionsmath3 = ["<button class=buttons005 onclick=correct()>2</button><br /><br /><button class=buttons005 onclick=wrong()>4</button>"];
        const optionsmath4 = ["<button class=buttons005 onclick=wrong()>4</button><br /><br /><button class=buttons005 onclick=correct()>5</button>"];
        const optionsmath5 = ["<button class=buttons005 onclick=correct()>4</button><br /><br /><button class=buttons005 onclick=wrong()>7</button>"];
        const optionsmath6 = ["<button class=buttons005 onclick=correct()>9</button><br /><br /><button class=buttons005 onclick=wrong()>2</button>"];
        const optionsmath7 = ["<button class=buttons005 onclick=wrong()>10</button><br /><br /><button class=buttons005 onclick=correct()>1</button>"];
        const optionsmath8 = ["<button class=buttons005 onclick=correct()>6</button><br /><br /><button class=buttons005 onclick=wrong()>9</button>"];
        const optionsmath9 = ["<button class=buttons005 onclick=correct()>10</button><br /><br /><button class=buttons005 onclick=wrong()>7</button>"];
        const optionsmath10 = ["<button class=buttons005 onclick=wrong()>3</button><br /><br /><button class=buttons005 onclick=correct()>9</button>"];

        let c = 0;
        c++;
        let d = 0;
        d++;

        function startMathTest() {
            disappear005.innerHTML = "";
            message0005.innerHTML = QMathTest[0];
            message0006.innerHTML = optionsmath1;
            mathTest.innerHTML = c++;
        }

        function correct() {
            message0007.innerHTML = "Correct";
            message0006.innerHTML = "";
            mathScore.innerHTML = d++;
            message0008.innerHTML = "<button class=buttons006 onclick=nextQuestion()>Next</button>";
        }

        function wrong() {
            message0007.innerHTML = "Incorrect";
            message0006.innerHTML = "";
            message0008.innerHTML = "<button class=buttons006 onclick=nextQuestion()>Next</button>";
        }

        function nextQuestion() {
            if (c == "2") {
                message0005.innerHTML = QMathTest[1];
                message0006.innerHTML = optionsmath2;
                message0007.innerHTML = "";
                mathTest.innerHTML = c++;
                message0008.innerHTML = "";
            }

            else if (c == "3") {
                message0005.innerHTML = QMathTest[2];
                message0006.innerHTML = optionsmath3;
                message0007.innerHTML = "";
                mathTest.innerHTML = c++;
                message0008.innerHTML = "";
            }


            else if (c == "4") {
                message0005.innerHTML = QMathTest[3];
                message0006.innerHTML = optionsmath4;
                message0007.innerHTML = "";
                mathTest.innerHTML = c++;
                message0008.innerHTML = "";
            }

            else if (c == "5") {
                message0005.innerHTML = QMathTest[4];
                message0006.innerHTML = optionsmath5;
                message0007.innerHTML = "";
                mathTest.innerHTML = c++;
                message0008.innerHTML = "";
            }

            else if (c == "6") {
                message0005.innerHTML = QMathTest[5];
                message0006.innerHTML = optionsmath6;
                message0007.innerHTML = "";
                mathTest.innerHTML = c++;
                message0008.innerHTML = "";
            }

            else if (c == "7") {
                message0005.innerHTML = QMathTest[6];
                message0006.innerHTML = optionsmath7;
                message0007.innerHTML = "";
                mathTest.innerHTML = c++;
                message0008.innerHTML = "";
            }

            else if (c == "8") {
                message0005.innerHTML = QMathTest[7];
                message0006.innerHTML = optionsmath8;
                message0007.innerHTML = "";
                mathTest.innerHTML = c++;
                message0008.innerHTML = "";
            }

            else if (c == "9") {
                message0005.innerHTML = QMathTest[8];
                message0006.innerHTML = optionsmath9;
                message0007.innerHTML = "";
                mathTest.innerHTML = c++;
                message0008.innerHTML = "";
            }

            else if (c == "10") {
                message0005.innerHTML = QMathTest[9];
                message0006.innerHTML = optionsmath10;
                message0007.innerHTML = "";
                mathTest.innerHTML = c++;
                message0008.innerHTML = "";
            } 
            else {
                message0005.innerHTML = "End of Quiz";
                message0006.innerHTML = "";
                message0007.innerHTML = "";
                message0008.innerHTML = "<button class=buttons006 onclick=repeatMathTest()>Repeat</button>";
            }
        }

        function repeatMathTest() {
            location.reload();
        }
