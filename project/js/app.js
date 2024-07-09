function convertText() {
  const input = document.getElementById("inputText").value;
  let output = "";

  for (let i = 0; i < input.length; i++) {
    let currentChar = input[i];
    let nextChar = i + 1 < input.length ? input[i + 1] : ' ';

    if (currentChar === 'ܐ') {
      output += "א";
    } else if (currentChar === 'ܒ') {
      output += "ב";
    } else if (currentChar === 'ܓ') {
      output += "ג";
    } else if (currentChar === 'ܕ') {
      output += "ד";
    } else if (currentChar === 'ܗ') {
      output += "ה";
    } else if (currentChar === 'ܘ') {
      output += "ו";
    } else if (currentChar === 'ܙ') {
      output += "ז";
    } else if (currentChar === 'ܚ') {
      output += "ח";
    } else if (currentChar === 'ܛ') {
      output += "ט";
    } else if (currentChar === 'ܝ') {
      output += "י";
    } else if (currentChar === 'ܟ') {
      output += nextChar === ' ' ? "ך" : "כ";
    } else if (currentChar === 'ܠ') {
      output += "ל";
    } else if (currentChar === 'ܡ') {
      output += nextChar === ' ' ? "ם" : "מ";
    } else if (currentChar === 'ܢ') {
      output += nextChar === ' ' ? "ן" : "נ";
    } else if (currentChar === 'ܣ') {
      output += "ס";
    } else if (currentChar === 'ܥ') {
      output += "ע";
    } else if (currentChar === 'ܦ') {
      output += nextChar === ' ' ? "ף" : "פ";
    } else if (currentChar === 'ܨ') {
      output += nextChar === ' ' ? "ץ" : "צ";
    } else if (currentChar === 'ܩ') {
      output += "ק";
    } else if (currentChar === 'ܪ') {
      output += "ר";
    } else if (currentChar === 'ܫ') {
      output += "ש";
    } else if (currentChar === 'ܬ') {
      output += "ת";
    } else if (currentChar === ' ') {
      output += " ";
    } else {
      output += currentChar;
    }
  }

  document.getElementById("outputText").value = output;
}
