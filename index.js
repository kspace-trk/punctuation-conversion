function punctuationConversion() {
  const inputText = document.getElementById("inputText").value;
  const inputTextArray = inputText.split(/\n/);
  let outputText = "";
  let tmp = "";
  inputTextArray.forEach((e) => {
    tmp = e.replace(/、/g, "，");
    tmp = tmp.replace(/。/g, "．");
    outputText += "<p>" + tmp + "</p>";
  });
  document.getElementById("outputText").innerHTML = outputText;
}
