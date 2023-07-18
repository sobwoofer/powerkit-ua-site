// Polyfill for NodeList's forEach method
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown-button");
  const dropDownList = dropDownWrapper.querySelector(".dropdown-list");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown-list-item"
  );
  const dropDownInput = dropDownWrapper.querySelector(".dropdown-input-hidden");

  // Click on the button. Open/Close select
  dropDownBtn.addEventListener("click", function (e) {
    dropDownList.classList.toggle("dropdown-list--visible");
    this.classList.add("dropdown-button--active");
  });

  // Selecting an element of the list. Remember the selected value. close dropdown
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      if (dropDownBtn.innerText === "EN") {
        dropDownList.classList.add("dropdown-list-reverse");
      }
      if (dropDownBtn.innerText === "UA") {
        dropDownList.classList.remove("dropdown-list-reverse");
      }
      dropDownList.classList.remove("dropdown-list--visible");
    });
  });

  // Click outside the dropdown. close dropdown
  document.addEventListener("click", function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove("dropdown-button--active");
      dropDownList.classList.remove("dropdown-list--visible");
    }
  });

  // Pressing Tab or Escape. close dropdown
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Escape") {
      dropDownBtn.classList.remove("dropdown-button--active");
      dropDownList.classList.remove("dropdown-list--visible");
    }
  });
});
