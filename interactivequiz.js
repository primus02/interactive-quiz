// Selectors
let currentQuestion = document.querySelector("h3");
let currentOptions = document.querySelectorAll(".option");
let finalScore = document.querySelector("p");
let actualScore= document.querySelector(".score");
let nextButton = document.querySelector("button");
let answerOptions = document.querySelector(".options");
let counter= 1;
let restartButton= document.querySelector(".restart");



function Question(question, options, correctOption){
    this.question = question,
    this.options = options,
    this.correctOption = correctOption
}

let question1 = new Question("What is a baby Alligator called?",["baby","gator","hatchling","calf"], "hatchling");

let question2 = new Question("What is the baby of a Moth known as?",["baby","infant","kit","larva"], "larva");

let question3 = new Question("What is a baby Goose called?", ["gooser","gosling","gup","pup"], "gosling"); 

let question4 = new Question( "What is the young of Buffalo called?",["calf","baby","pup","cow"], "calf");

let question5 = new Question("What is the adult of a Kid called?",["calf","doe","goat","chick"], "goat");

let question6 = new Question("What is the baby of Bat called?",["pup","cub","kit","chick"], "pup");

let question7 = new Question("What is the baby of an Antelop called?",["calf","doe","infant","kitten"], "calf");

let question8 = new Question("What is the adult of a Kitten called?",["camel","cattle","cat","ape"], "cat");

let question9 = new Question("What is the baby of an Ape called?",["kid","calf","apes","baby"], "baby");

let question10 = new Question("What is the baby of a Lion called?",["calf","cub","pup","liones"], "cub");


let quizContent = [];
quizContent.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);




// Event Listeners
 nextButton.addEventListener("click", ()=>{
   startQuiz();

 });

window.addEventListener("DOMContentLoaded", displayFirstQuestion);

restartButton.addEventListener("click", ()=>{
    window.location.reload();
});

// Functions
function startQuiz(){
    
    let inputChecked = document.querySelector("input[type=radio]:checked");

  if(counter === quizContent.length){
        finalScore.classList.remove("d-none");
        
      let checkAnswer = inputChecked.parentElement.children[1].innerText;
      if(checkAnswer=== quizContent[counter-1].correctOption){
            actualScore.innerText= Number.parseFloat(actualScore.innerText)+1;
        }
        else{
             actualScore.innerText= Number.parseFloat(actualScore.innerText)+0;
        }
         nextButton.classList.add("d-none");
         restartButton.classList.remove("d-none");
      return;
} 
    
   if(!inputChecked){
       alert("Kindly select an answer");
       return;
   }
    
    else{
        let checkAnswer = inputChecked.parentElement.children[1].innerText;
        if(checkAnswer=== quizContent[counter-1].correctOption){
            actualScore.innerText= Number.parseFloat(actualScore.innerText)+1;
        }
        else{
             actualScore.innerText= Number.parseFloat(actualScore.innerText)+0;
        }
        console.log(actualScore.innerText);
        
    answerOptions.innerHTML="";
   currentQuestion.innerHTML= quizContent[counter].question;
   
    quizContent[counter].options.forEach((option)=>{
        let div = document.createElement("div");
            div.classList.add("section");
        
        let input1 = document.createElement("input");
            input1.classList.add("option");
            input1.setAttribute("type", "radio");
            input1.setAttribute("name", "dynradio");
        
            div.appendChild(input1);
            
           let span1= document.createElement("span");
               span1.classList.add("answer-option");
               span1.innerHTML = option;
              div.appendChild(span1);
        
        answerOptions.appendChild(div);
   
    });
          
        
    counter++;
    }
} 


function displayFirstQuestion(){
    
     answerOptions.innerHTML="";
   currentQuestion.innerHTML= quizContent[0].question;
   
    quizContent[0].options.forEach((option)=>{
        let div = document.createElement("div");
            div.classList.add("section");
        
        let input1 = document.createElement("input");
            input1.classList.add("option");
            input1.setAttribute("type", "radio");
            input1.setAttribute("name", "dynradio");
        
            div.appendChild(input1);
            
           let span1= document.createElement("span");
               span1.classList.add("answer-option");
               span1.innerHTML = option;
              div.appendChild(span1);
        
        answerOptions.appendChild(div);
   
    });
}