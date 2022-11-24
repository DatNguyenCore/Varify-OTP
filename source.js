document.addEventListener("DOMContentLoaded", () => {
  const collection = document.getElementsByClassName("input-digit");

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
