const element = document.getElementById("target");
const textNode = element.childNodes[0];
let text = textNode.data;

// console.log(text[text.length - 1] + text.substring(0, text.length - 1));

window.addEventListener("load", () => {
  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    // console.log(text);
    textNode.data = text;
  }, 100);
});

