const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".keys");
const displaytext = document.querySelector(".display");

calculator.querySelector(".keys");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const Keycontent = keys.textContent;
    const dipslaynum = displaytext.textContent;
    if (!action) {
      if (dipslaynum === "0") {
        displaytext = keycontent;
      }
    }
  }

  // if (!action) {
  //   console.log("number key");
  //   (displaytext.textContent = keys), value;
  // }
  // if (
  //   action === "add" ||
  //   action === "subtract" ||
  //   action === "multiply" ||
  //   action === "divide"
  // ) {
  //   console.log("operator key");
  // }
});
