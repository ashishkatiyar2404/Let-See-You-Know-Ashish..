const chalk = require('chalk');

var readlineSync = require('readline-sync'); //import file
var playerName = readlineSync.question(chalk.hex('#DEADED').bold("Just Write Your Name "));  //read username
var score = 0;   // for users score
console.log(chalk.green("hey! "+playerName+" Namaste..\n there will be some questions about ashish and you just have to write the option name and press Enter"));  


var userIn = readlineSync.question(chalk.red("Enter y for play\n"));

//creating array 
var questions = [{
  quest : '1.What is my Nick name?😂\na.Lala\nb.Lalla\nc.betu\nd.aazad\ne.Both A and B\n',
  ans : 'e'
},
{
  quest : '2.Where i am from?🏠\na.Vidisha\nb.Bhopal\nc.Auraiya(U.P)\nd.Kasool\n',
  ans : 'a'

},
{
  quest : '3.When Ashish was born?👨‍🍼\na.23 April\nb.25 April\nc.24 April\nd.1 January\n',
  ans : 'c'

},
{
  quest : '4.In which of the following Ashish is Good at?🤔\na.Swimming 🏊‍♂️\nb.Cricket 🏏\nc.Gym\nd.Photography 📷\n',
  ans : 'd'
},
{
  quest : '5.Which Programming Language Ashish is familiar with?💻\na.C\nb.C++\nc.Java\nd.Python 🐍\n',
  ans : 'c'
},
{
  quest : '6.What is Ashish Fav. Pet?🔣\na.Cat 🐈\nb.Dog 🐕\nc.Elephant🐘\nd.Snake🐍\n',
  ans : 'b'
},
{
 quest : '7.How many Rough copy📔 Ashish made during his whole Graduation?😂\na.1\nb.3\nc.2\nd.0\n',
 ans : 'a'
},
{
  quest : '8.Who is Ashish Fav. Singer?🎙️\na.Atif\nb.Lata Ji\nc.Himesh\nd.A.R Rehmaan Sir\n',
  ans : 'a'
},
{
  quest : '9.Ashish is Single or Mingle?😂\na.Mingle\nb.Complicated\nc.Single till now🤣\nd.He also dont know 🤣🤣\n',
  ans : 'c'
},
{
  quest : '10.Which Character is fav of Ashish?👀\na.Harry Potter\nb.Joker\nc.Batman\nd.SuperMan\n',
  ans : 'b'
}]

// function
function function_name(questions_1st, solution) {
  var userAnsInput = readlineSync.question(questions_1st)
  if(userAnsInput === solution) {
    console.log(chalk.white.bgRed.bold('🤩 You are right..\n'+'Your current score: '+(++score)+'\n------------------------------'));
  }
  else{
    console.log(chalk.white.bgRedBright.bold('🥺 You are wrong\n'+'Your current score: '+(--score)+'\n--------------------------------'));
  }
}



if(userIn === 'y') {
         //loop for array
    for(var eye =0;eye<questions.length; eye++) {
      var currentQuestion = questions[eye];
      function_name(currentQuestion.quest,currentQuestion.ans)
   }
}
else{
  console.log("Bbye if you wanna play again refresh it");
}



// Hightest score and the output of quiz or users score
if(score > 5) {
    console.log("Your Score is : "+score+"🥳" +"\nThe Hightest Scores are🔥 : 1.Mitanshu - 9😀\n2.Ashutosh - 8😀\n3.Shivarth - 8😀\nSend me Screenshot and i will update this list");
}
else{
  console.log("You Dont know ashish enough\nWell No Prob Thanks for Playing This...🥳");
}
