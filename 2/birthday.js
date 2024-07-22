const birthdayDate = document.querySelector('.birthday_date');
const addButton = document.querySelector('.add_button');
const textResult = document.querySelector('.result');

function dayForm(num, one, two, tree) {
  let n = Math.abs(num);
  n %= 100;
  if (n >= 5 && n <= 20 || n === 13 || n === 14) {
    return tree;    
  }  
  n %= 10;
  if (n === 1) {
    return one;
  }
  else if (n >= 2 && n <= 4) {
    return two;
  }
  else {
    return tree;
  }
} 

addButton.addEventListener('click', function() {
  let diff = birthdayDate.valueAsNumber - new Date();  
  let result = Math.floor(diff / 1000 / 3600 / 24);
  
  let currentDayForm = dayForm(result, 'день', 'дня', 'дней')
  
  if(isNaN(result)) {
    textResult.textContent = "Ввведите дату рождения"
  }
  else if (result < 0) {
    textResult.textContent = "Ваш день рождения уже прошел"
  }
  else{
  textResult.textContent = "До вашего дня рождения осталось " + result + " " + currentDayForm
} 
}
)
