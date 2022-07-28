
const output = document.querySelector("#result");
function display(dec) {
  output.value += dec;
  return dec;
}
function clearScreen(clear) {
  result.value = "";
}

function solve() {
  let x = document.querySelector("#result").value;
  let y = eval(x);
  output.value = y;
  return y;
}
