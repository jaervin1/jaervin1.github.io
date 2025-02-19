document.getElementById("btn-display").onclick = () => {
  const startNum = document.getElementById("input-start").value;
  const endNum = document.getElementById("input-end").value;
  if (startNum > endNum) {
    document.getElementById(
      "number-error"
    ).innerHTML = `${endNum} is less than ${startNum}.`;
    return;
  }
};
