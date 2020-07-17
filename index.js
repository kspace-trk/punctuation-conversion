function reverseInputText() {
    const inputText = document.getElementById("inputText").value;
    const inputTextArray = inputText.split(/\n/);
    const reverseArray = inputTextArray.reverse();
    let tmp = '';
    reverseArray.forEach((e) => {
      tmp += '<p>' + e + '</p>';
    })
    document.getElementById('outputText').innerHTML = tmp;
  }


