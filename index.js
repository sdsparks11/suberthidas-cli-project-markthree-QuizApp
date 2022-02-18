var readlineSync = require("readline-sync");
var score=0;
var count=0;
var flag=0;
//var j=0;
var userName = readlineSync.question("May I know your name?");
console.log("Welcome "+userName+" let's begin the game!");
console.log("\nRead the Rules carefully-\nLvl 1:For each right answer=+1,No negetive points\nLvl 2:For each right answer=+2 & For each wrong answer=-1\nLvl 3:For each right answer=+4 & For each wrong answer=-2\n\nMinimum 1 answer is required to be correct to qualify for lvl 2\nMinimum 2 answers are required to be correct to qualify for lvl 3\n");
var highestScorer={
  name:"Suberthi",
  score:10,
  level:3,
}
function playgame(question,answer,option,addpoint,delpoint,quesnum){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer.toLowerCase() || userAnswer.toLowerCase()===option.toLowerCase()){
    console.log("Right Answer!");
    count=count+1;
    score=score+addpoint;
  }else{
    console.log("Wrong Answer!");
    score=score-delpoint;
  }
  console.log("Your current score=",score);
}
var questions=[{
  question:"The term 'Dolphin Kick' is associated with which of the following sport?\nA.Boxing\nB.Swimming\nC.Squash\n",
  answer:"Swimming",
  option:"B"
},
{
  question:"The test cricket ground-'Adelaide Oval' is located in which country?\nA.Australia\nB.Ireland\nC.England\n",
  answer:"Australia",
  option:"A"
},{
  question:"Based on the novels by Dan Brown,what completes this list of films featuring the character Robert Langdon:The Da Vinci Code,Angels & Demons,_____?\nA.Digital Fortress\nB.Inferno\nC.Deception Point\n",
  answer:"Inferno",
  option:"B"
},
{
  question:"Which Indian author won the Man Booker Prize for Fiction in 1997 for her novel-'The God Of Small Things'?\nA.Anita Desai\nB.Arundhati Roy\nC.Amrita Pritam\n",
  answer:"Arundhati Roy",
  option:"B"
},
{
  question:"Disney’s beloved Mickey Mouse almost had a different name. What was it?\nA.Mike the Mouse\nB.Mortimer Mouse\nC.Melvin Mouse\n",
  answer:"Mortimer Mouse",
  option:"B"
}]
console.log("Welcome to the Level 1 round,Genre='Sports'");
for(var i=0;i<questions.length;i++){
  //j=j+1;
  var currentQuestion = questions[i];
  if(i<2){
    playgame(currentQuestion.question,currentQuestion.answer,currentQuestion.option,1,0,i);
  }
  else if((i>=2 && i<4) && count>=1){
    if(i==2){
      console.log("\nWelcome to the Level 2 round,Genre='Novels & Authors'")
    }
    playgame(currentQuestion.question,currentQuestion.answer,currentQuestion.option,2,1);
  }
  else if(i==4 && count>=2){
    console.log("\nWelcome to the final round,Genre='How well you know the character:)'");
    playgame(currentQuestion.question,currentQuestion.answer,currentQuestion.option,4,2);
  }
  else{
    flag=1;
    console.log("\nSorry!You couldn't pass this level,Game Over!");
    console.log("Your Final Score=",score);
    break;
  }
}
if(flag==0 && highestScorer.score<=score){
  console.log("\nCongratulations you have bet the top scorer!You can send the screenshot of your score, for highest scorer update!");
  console.log("Your final score=",score);
}
else if(highestScorer.score>score && flag==0){
  console.log("\nReached the end of the game,Your final score=",score);
}
console.log("\nLast Updated Highest Scorer="+highestScorer.name+",Score="+highestScorer.score);