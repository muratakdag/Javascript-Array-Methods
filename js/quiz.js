// TODO:
// Add icons for wrong & right answers
// Add text label that displays correct or incorrect 
// Fix width so it doesn't change with each question 
// Add option to replay

// Select elements from the DOM
const quizQuestion = document.querySelector(".quiz-question");
const quizChoices = document.querySelector(".quiz-choices");
const quizScore = document.querySelector(".quiz-score");
const quizFooter = document.querySelector(".quiz-footer");

// console.log(quizQuestion);
// console.log(quizChoices);

// QUIZ VARIABLES
let id = 0;
let score = 0;

// Display question and choices
function displayQuestion(id) {

    // Create div to hold question text
    let question = document.createElement("div")
    question.className = "question";
    question.textContent = quizQuestions[id].question;
    // Add question to quiz-question div
    quizQuestion.append(question);
    // Use loop to create div for each choice
    let choices = quizQuestions[id].choices;
    // console.log(choices);

    for (let i = 0; i < 4; i++) {
        let choice = document.createElement("div");
        choice.classList.add("choice", "choice-hover");
        choice.innerHTML = "<span class='choice-text'>" + choices[i] + "</span>";
        // Add choice-correct class to answer choice
        if (choice.textContent === quizQuestions[id].answer) {
            choice.classList.add("choice-correct");
        }
        // Append choice div to quizChoices div
        quizChoices.append(choice);
        // Add event listener to choice 
        choice.addEventListener("click", checkChoice);
    } 

    // Add question counter number to span in footer
    const counterHolder = document.getElementById("counter");
    counterHolder.textContent = id + 1;
}

// Run function to display first question
displayQuestion(id);

// Function to check choice clicked
function checkChoice(event) {
  
    // Disable all hover states & remove event listeners from choices so other choices can't be clicked
    const choices = document.querySelectorAll(".choice");
    for (let i = 0; i < choices.length; i++) {
        choices[i].classList.remove("choice-hover");
        choices[i].removeEventListener("click", checkChoice);
    }

    // Add class to selected choice
    for (let i = 0; i < choices.length; i++) {
        if (event.target.textContent === choices[i].textContent) {
            choices[i].classList.add("highlight");
            // Check if selection is correct
            let answer = quizQuestions[id].answer;
            // console.log(answer);

            if (event.target.textContent === answer) {
                // Change background color of choice by adding class
                choices[i].classList.add("correct");
                // Update score
                score++;
            } else {
                choices[i].classList.add("incorrect");
            }
        }
    }
    
  

    // Highlight correct answer by targeting choice-correct class
    const answerChoice = document.querySelector(".choice-correct");
    answerChoice.classList.add("correct");
   
    // Check if on last question
    const nextBtn = document.querySelector(".next-btn");
    if (id < 12){
        // Display next question button  
        nextBtn.style.display = "block";
        nextBtn.addEventListener("click", nextFunction); 
    } else {
        // Change button label to 'See Score' & change event listener function
        nextBtn.textContent = "SONUÇLAR"
        nextBtn.removeEventListener("click", nextFunction);
        nextBtn.addEventListener("click", seeScore);
    }

    // Increment counter
    id++;
    
    
}

function nextFunction() {
    // Clear previous question & choices
    quizQuestion.innerHTML = "";
    quizChoices.innerHTML = "";
    displayQuestion(id);
}

function seeScore() {
    // Clear previous question & choices
    quizQuestion.innerHTML = "";
    quizChoices.innerHTML = "";

    // Hide quiz footer
    quizFooter.style.display = "none";

    // Display quiz-score div
    quizScore.style.display = "block";

    // Display score
    const scoreResult = document.getElementById("score");
    scoreResult.innerText = score;

}


