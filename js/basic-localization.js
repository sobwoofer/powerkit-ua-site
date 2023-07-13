import { langArr } from "./translation.js";
import setCurrentDomine from "./current-domine.js";

class languageSwitcher {
  allLang = ["ua", "en"];
  vocabluary;

  constructor(objVocabluary) {
    this.vocabluary = objVocabluary;

    const dropDownListItems = document.querySelectorAll(".dropdown-list-item");

    this.switchLanguageMenu();

    dropDownListItems.forEach((listItem) => {
      listItem.addEventListener("click", (event) => {
        event.stopPropagation();

        this.language = event.target.dataset.value;

        this.switchLanguageMenu();
        this.translateContent();
        setCurrentDomine();
      });
    });
  }

  set language(selectedLanguage) {
    localStorage.setItem("language", selectedLanguage);
  }

  get language() {
    return localStorage.getItem("language") || "ua";
  }

  translateContent() {
    for (let key in this.vocabluary) {
      let elem = document.querySelector(`[data-lng=${key}]`);
      if (elem) {
        elem.innerHTML = this.vocabluary[key][this.language];
      }
    }
  }

  switchLanguageMenu() {
    const dropDownBtn = document.querySelector(".dropdown-button");
    const dropDownList = document.querySelector(".dropdown-list");
    dropDownBtn.innerText = this.language.toUpperCase();
    if (dropDownBtn.innerText === "EN") {
      dropDownList.classList.add("dropdown-list-reverse");
    }
    if (dropDownBtn.innerText === "UA") {
      dropDownList.classList.remove("dropdown-list-reverse");
    }

    dropDownList.classList.remove("dropdown-list--visible");
  }
}

const pkLangSwitcher = new languageSwitcher(langArr);

pkLangSwitcher.translateContent();

setCurrentDomine();
