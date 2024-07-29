const existingUserLogin = "the_best_user";
const existingUserPassword = 12345678;

let userlogin = prompt("Введите логин");
userlogin = userlogin.trim();
let userpassword = prompt("Введите пароль");

if ((existingUserLogin === userlogin) & (existingUserPassword === 12345678)) {
  alert(`Добро пожаловать ${existingUserLogin}!`);
} else {
  alert("Логин или пароль введены неверно");
}
