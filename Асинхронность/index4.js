let testText = new Promise((resolve) => {
  setTimeout(() => {
    let text = "Вы создали асинхронный текст через промисы";
    resolve(text);
  }, 5000);
});
testText.then((result) => {
  let div = document.createElement("div");
  div.textContent = result;
  document.body.append(div);
});
