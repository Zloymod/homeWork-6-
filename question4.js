// Исходник
// Вам необходимо переписать данный цикл for на цикл с while и do...while, чтобы логика выполнения кода и результат остались без изменения:
// for (let i = 0; i < 3; i += 1) {
//   let newStudent = prompt("Введите имя нового студента!");
//   if (newStudent) {
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`);
//   }
// }
//******************************************************************************************************* */
let i = 0;

// while (i < 3) {
//   let newStudent = prompt("Введите имя нового студента!");
//   if (newStudent) {
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`);
//   }
//   i++;
// }
//******************************************************************************************************* */
do {
  let newStudent = prompt("Введите имя нового студента!");
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  i++;
} while (i <= 2);
