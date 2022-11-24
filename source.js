var collection = document.getElementsByClassName("input-digit");

var modalContainerSuccess = document.getElementById("modal-container-success");
var modalContainerError = document.getElementById("modal-container-error");
var modalContainerWarning = document.getElementById("modal-container-warning");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").onkeypress = function (e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      e.preventDefault();
    }
  };

  document.getElementById("digit-1").focus();

  for (let element of collection) {
    element.addEventListener("keyup", (event) => {
      const input = event.srcElement;
      const value = event.target.value;
      const keyCode = event.keyCode;

      const isIgnoreChar = [
        "~",
        "`",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "-",
        "_",
        "=",
        "+",
        "{",
        "[",
        "}",
        "]",
        "\\",
        "|",
        ";",
        ":",
        "'",
        '"',
        ",",
        "<",
        ".",
        ">",
        "/",
        "?",
      ].includes(value);

      if (isIgnoreChar) {
        input.value = "";
        return;
      }

      if (keyCode === 32) {
        // space
        input.value = "";
        return;
      }

      if (keyCode === 8 || keyCode === 37) {
        const classNamePrev = input.getAttribute("data-previous");

        if (!classNamePrev) {
          return;
        }

        document.getElementById(classNamePrev).focus();
        return;
      }

      if (
        (keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 65 && keyCode <= 90) ||
        (keyCode >= 96 && keyCode <= 105) ||
        keyCode === 39
      ) {
        const classNameNext = input.getAttribute("data-next");

        if (!value) {
          return;
        }

        if (classNameNext === "submit-btn") {
          document.getElementById(classNameNext).click();
          return;
        }

        document.getElementById(classNameNext).focus();
      }
    });
  }
});

function onSubmit(event) {
  let arrInput = [];

  for (let element of collection) {
    const inputValue = element.value;
    arrInput.push(inputValue);
  }

  const LENGTH_INPUT = 4;
  if (arrInput.length === LENGTH_INPUT) {
    console.log("VALUE", arrInput.join(""));

    modalContainerSuccess.classList.add("modal-container-show");
    // modalContainerError.classList.add("modal-container-show");
    // modalContainerWarning.classList.add("modal-container-show");
  }

  return false;
}

function onClose() {
  modalContainerSuccess.classList.remove("modal-container-show");
  modalContainerError.classList.remove("modal-container-show");
  modalContainerWarning.classList.remove("modal-container-show");
  return false;
}

function onBackgroundPress({ srcElement }) {
  if (!srcElement.className.split(" ").includes("modal")) {
    onClose();
  }

  return false;
}
