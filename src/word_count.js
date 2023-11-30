const textArea = document.getElementById("message");
const charCount = document.getElementById("cCount");

textArea.oninput = () => {
  let characters = textArea.value;
  charCount.textContent = characters.length;
};
