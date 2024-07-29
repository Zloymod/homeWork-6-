let correctAnswers = 0;
let incorrectAnswers = 0;

const answer1 = 4;
const answer2 = 4;
const answer3 = 1;
const answer4 = 12;
const answer5 = 6;

// let checAnswer2;
// let checAnswer3;
// let checAnswer4;
// let checAnswer5;

let question1 = prompt("Сколько будет 2 + 2?");
alert(checAnswer1(question1, answer1));

function checAnswer1(question1, answer1) {
  if (answer1 === Number(question1)) {
    alert("Ответ вреный!");
    correctAnswers++;
  } else {
    alert("Ответ не верный!");
    incorrectAnswers++;
  }
}
console.log(checAnswer1);
let question2 = prompt("Сколько будет 2 * 2?");
alert(checAnswer2(question2, answer2));
function checAnswer2(question2, answer2) {
  if (answer2 === Number(question2)) {
    alert("Ответ вреный!");
    correctAnswers++;
  } else {
    alert("Ответ не верный!");
    incorrectAnswers++;
  }
}
let question3 = prompt(
  "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
);
alert(checAnswer3(question3, answer3));
function checAnswer3(question3, answer3) {
  if (answer3 === Number(question3)) {
    alert("Ответ вреный!");
    correctAnswers++;
  } else {
    alert("Ответ не верный!");
    incorrectAnswers++;
  }
}
let question4 = prompt(
  "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
);
alert(checAnswer4(question4, answer4));
function checAnswer4(question4, answer4) {
  if (answer4 === Number(question4)) {
    alert("Ответ вреный!");
    correctAnswers++;
  } else {
    alert("Ответ не верный!");
    incorrectAnswers++;
  }
}
let question5 = prompt("Сколько будет 2 + 2 * 2?");
alert(checAnswer5(question5, answer5));
function checAnswer5(question5, answer5) {
  if (answer5 === Number(question5)) {
    alert("Ответ вреный!");
    correctAnswers++;
  } else {
    alert("Ответ не верный!");
    incorrectAnswers++;
  }
}
// *********************************************************************************************************

// console.log(question1, question2, question3, question4, question5);
// console.log(Number(question1));
// Я не доделал и сдался....
// function answer(
//   question1,
//   question2,
//   question3,
//   question4,
//   question5,
//   answer1,
//   answer2,
//   answer3,
//   answer4,
//   answer5,
//   correctAnswers,
//   incorrectAnswers
// ) {
//   if (
//     answer1 === Number(question1) &&
//     answer2 === Number(question2) &&
//     answer3 === Number(question3) &&
//     answer4 === Number(question4) &&
//     answer5 === Number(question5)
//   ) {
//     alert("Ответ Верный!");
//     correctAnswers++;
//   } else {
//     alert("Ответ неверный!");
//     incorrectAnswers++;
//   }

alert(
  `Конец теста! Правильных ответов: ${correctAnswers} Неправильных ответов: ${incorrectAnswers}.`
);
