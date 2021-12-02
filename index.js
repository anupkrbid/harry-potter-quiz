var readlineSync = require('readline-sync');

var user = readlineSync.question("What's Your Name? ");

console.log("\nWelcome " + user + " to The Harry Potter Quiz!!! \n");

var score = 0;
var questionnaire = [
  {
    question: "Who killed Severus Snape?",
    correctOption: "b",
    options: [
      {
        label: "a",
        possibleAnswer: "Bellatrix Lestrange"
      },
      {
        label: "b",
        possibleAnswer: "Nagini"
      },
      {
        label: "c",
        possibleAnswer: "Lord Voldemort"
      },
      {
        label: "d",
        possibleAnswer: "Lucius Malfoy"
      }
    ]
  },
  {
    question: "Who is Narcisa Malfoy's sister?",
    correctOption: "d",
    options: [
      {
        label: "a",
        possibleAnswer: "Minerva McGollagal"
      },
      {
        label: "b",
        possibleAnswer: "Hermione Granger"
      },
      {
        label: "c",
        possibleAnswer: "Lilly Potter"
      },
      {
        label: "d",
        possibleAnswer: "Bellatrix Lestrange"
      }
    ]
  },
  {
    question: "What animal can Harry speak to?",
    correctOption: "c",
    options: [
      {
        label: "a",
        possibleAnswer: "Mice"
      },
      {
        label: "b",
        possibleAnswer: "Spiders"
      },
      {
        label: "c",
        possibleAnswer: "Snakes"
      },
      {
        label: "d",
        possibleAnswer: "Dragons"
      }
    ]
  },
  {
    question: "Who does Harry marry?",
    correctOption: "a",
    options: [
      {
        label: "a",
        possibleAnswer: "Ginny Weasley"
      },
      {
        label: "b",
        possibleAnswer: "Luna Lovegood"
      },
      {
        label: "c",
        possibleAnswer: "Hermione Granger "
      },
      {
        label: "d",
        possibleAnswer: "Cho Chang"
      }
    ]
  },
  {
    question: "How many kids does Harry Have? (Epilouge Book 7)",
    correctOption: "b",
    options: [
      {
        label: "a",
        possibleAnswer: "2"
      },
      {
        label: "b",
        possibleAnswer: "3"
      },
      {
        label: "c",
        possibleAnswer: "4"
      },
      {
        label: "d",
        possibleAnswer: "5"
      }
    ]
  },
  {
    question: "Where does Hermione first see Ron?",
    correctOption: "a",
    options: [
      {
        label: "a",
        possibleAnswer: "Looking for Neville's Toad, On the Hogwarts express"
      },
      {
        label: "b",
        possibleAnswer: "In the sorting ceremony"
      },
      {
        label: "c",
        possibleAnswer: "At the Gryffindor table"
      },
      {
        label: "d",
        possibleAnswer: "On the steps, on their way up to bed"
      }
    ]
  },
  {
    question: "Who do people consider \"Loony\"?",
    correctOption: "d",
    options: [
      {
        label: "a",
        possibleAnswer: "Hermione Granger"
      },
      {
        label: "b",
        possibleAnswer: "Ron Weasley"
      },
      {
        label: "c",
        possibleAnswer: "Neville Longbottom"
      },
      {
        label: "d",
        possibleAnswer: "Luna Lovegood"
      }
    ]
  },
  {
    question: "How does the baslisk move from one part of the school to the other?",
    correctOption: "c",
    options: [
      {
        label: "a",
        possibleAnswer: "Shape shifting"
      },
      {
        label: "b",
        possibleAnswer: "He's invisible, no one can see of feel him."
      },
      {
        label: "c",
        possibleAnswer: "Pipes"
      },
      {
        label: "d",
        possibleAnswer: "Blending in with students"
      }
    ]
  },
  {
    question: "Harry has a scar on his forehead. What shape is it?",
    correctOption: "b",
    options: [
      {
        label: "a",
        possibleAnswer: "Like a pigs tail"
      },
      {
        label: "b",
        possibleAnswer: "Like a lightning bolt"
      },
      {
        label: "c",
        possibleAnswer: "Like a shining star"
      },
      {
        label: "d",
        possibleAnswer: "Like an egg"
      }
    ]
  },
  {
    question: "How old was Voldemort when he opened the Chamber of Secrets?",
    correctOption: "b",
    options: [
      {
        label: "a",
        possibleAnswer: "15"
      },
      {
        label: "b",
        possibleAnswer: "16"
      },
      {
        label: "c",
        possibleAnswer: "17"
      },
      {
        label: "d",
        possibleAnswer: "18"
      }
    ]
  }
];
var leaderBoard = [
  {
    name: "Arnab",
    score: "10"
  },
  {
    name: "Shubham",
    score: "10"
  },
  {
    name: "Swapnil",
    score: "9"
  }
];

function attemptQuiz(quiz, questionNo) {
  console.log(questionNo + ".", quiz.question);
  for (var j = 0; j < quiz.options.length; j++) {
    console.log(" ", quiz.options[j].label + ".", quiz.options[j].possibleAnswer);
  }
  var answer = readlineSync.question("Your Answer (a/b/c/d): ");
  if (quiz.correctOption.toLowerCase() === answer.toLowerCase()) {
    score = score + 1;
    console.log("\nYup, You Got That Right!!! \n")
  } else {
    console.log("\nNope, That's Not It. Correct option is " + quiz.correctOption, "\n");
  }
}

for (var i = 0; i < questionnaire.length; i++) {
  attemptQuiz(questionnaire[i], i+1);
}

console.log("You SCORED: ", score, "\n");

console.log("Check out the high scores, if you should be there ping me and I'll update it");

for (var i = 0; i < leaderBoard.length; i++) {
  console.log(leaderBoard[i].name + ":", leaderBoard[i].score);
}
