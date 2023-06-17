var result = 0; // Declare the 'result' variable outside the event listener

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  var input = [];
  var inputField;
  for (var i = 1; i <= 9; i++) {
    inputField = document.getElementById('input' + i);
    input.push(inputField.value);
  }

  var grade = [3, 2, 2, 3, 3, 2, 3, 4, 3];

  for (var i = 0; i < 9; i++) {
    if (input[i] === 'o' || input[i] === 'O') {
      result += 10 * grade[i];
    } else if (input[i] === 'A+' || input[i] === 'a+') {
      result += 9 * grade[i];
    } else if (input[i] === 'A' || input[i] === 'a') {
      result += 8 * grade[i];
    } else if (input[i] === 'B+' || input[i] === 'b+') {
      result += 7 * grade[i];
    } else if (input[i] === 'B' || input[i] === 'b') {
      result += 6 * grade[i];
    } else if (input[i] === 'C' || input[i] === 'c') {
      result += 5 * grade[i];
    } else {
      result += 0 * grade[i];
    }
  }

  var final = result / 25;
  let finalgrade = document.getElementById("res");
  finalgrade.innerHTML = "Your GPA is:"+final;
  console.log(final);
});
