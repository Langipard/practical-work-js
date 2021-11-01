let textarea = document.querySelector("#textarea");
let getWord = document.createElement("div");
getWord.className = "get-word";

let wordCounter = (text) => {
  let arrayText = text.split(" ");
  for (let i = arrayText.length; i > 0; i--) {
    if (arrayText[i] == "" || arrayText[i] == " ") {
      arrayText.splice(i, 1);
    }
  }
  console.log(arrayText);
  return arrayText.length;
};

textarea.onblur = function () {
  if (textarea.value == "") return;
  getWord.textContent = "Всего слов в тексте : " + wordCounter(textarea.value);
  textarea.after(getWord);
};

// let wordCounter = (text) => {
//     let space = "";
//     let newText = "";
//     for (let char of text) {
//       console.log(char);
//       if (space == char && char == " ") continue;
//       space = char;
//       newText += char;
//     }
//     let newArrayText = newText.split("\n").join(" ").split(" ");
//     if (newArrayText[newArrayText.length - 1] == "") {
//       newArrayText.pop();
//     }
//     return newArrayText.length;
// };
