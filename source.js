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
      const input = event.path[0];
      const value = event.target.value;

      if (!value) {
        return;
      }

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
        "\"",
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

      if (event.keyCode === 32) {
        // space
        input.value = "";
        return;
      }

      if (event.keyCode === 8 || event.keyCode === 37) {
        const classNamePrev = input.getAttribute("data-previous");
        document.getElementById(classNamePrev).focus();
        return;
      }

      if (
        (event.keyCode >= 48 && event.keyCode <= 57) ||
        (event.keyCode >= 65 && event.keyCode <= 90) ||
        (event.keyCode >= 96 && event.keyCode <= 105) ||
        event.keyCode === 39
      ) {
        const classNameNext = input.getAttribute("data-next");

        if (classNameNext === "submit-btn") {
          document.getElementById(classNameNext).click();
          return;
        }

        document.getElementById(classNameNext).focus();
      }
    });
  }
});
