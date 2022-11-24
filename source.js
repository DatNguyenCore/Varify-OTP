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
    element.addEventListener("keyup", (e) => {
      const input = e.path[0];

      if (e.keyCode === 32) {
        // space
        input.value = "";
      } else if (e.keyCode === 8 || e.keyCode === 37) {
        const classNamePrev = input.getAttribute("data-previous");
        document.getElementById(classNamePrev).focus();
      } else if (
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        e.keyCode === 39
      ) {
        if (e.target.value) {
          const classNameNext = input.getAttribute("data-next");

          if (classNameNext === "submit-btn") {
            document.getElementById(classNameNext).click();
          } else {
            document.getElementById(classNameNext).focus();
          }
        }
      }
    });
  }
});
