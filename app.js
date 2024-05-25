document.addEventListener("DOMContentLoaded", function () {
  const radioInput1 = document.getElementById("querytype");
  const radioInput2 = document.getElementById("querytype2");
  const firstCheckDiv = document.querySelector(".radio-input-box-forjs");
  const secondCheckDiv = document.querySelector(".radio-input-box-forjs1");
  const checkedColor = "hsl(148, 38%, 91%)";
  const uncheckedColor = "transparent";
  const checkedBorderColor = "hsl(169, 82%, 27%)";
  const uncheckedBorderColor = "hsl(186, 15%, 59%)";

  function updateCheckDiv(div, otherDiv, checked) {
    div.style.backgroundColor = checked ? checkedColor : uncheckedColor;
    div.style.borderColor = checked ? checkedBorderColor : uncheckedBorderColor;
    otherDiv.style.backgroundColor = checked ? uncheckedColor : checkedColor;
    otherDiv.style.borderColor = checked
      ? uncheckedBorderColor
      : checkedBorderColor;
  }

  firstCheckDiv.addEventListener("click", () => {
    radioInput1.checked = true;
    radioInput2.checked = false;
    updateCheckDiv(firstCheckDiv, secondCheckDiv, true);
  });

  secondCheckDiv.addEventListener("click", () => {
    radioInput1.checked = false;
    radioInput2.checked = true;
    updateCheckDiv(secondCheckDiv, firstCheckDiv, true);
  });

  radioInput1.addEventListener("change", () => {
    updateCheckDiv(firstCheckDiv, secondCheckDiv, radioInput1.checked);
  });

  radioInput2.addEventListener("change", () => {
    updateCheckDiv(secondCheckDiv, firstCheckDiv, radioInput2.checked);
  });
});
