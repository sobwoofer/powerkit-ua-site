const { slideToggle, slideUp, slideDown } = window.domSlider;
const box = document.querySelector(".faq-box");
if (box) {
box.addEventListener("click", clickBtnFaq);
}
function clickBtnFaq(e) {
  const itemEl = e.target.closest(".faq-box-item");
  if (!itemEl) {
    return;
  }
  const btnEl = itemEl.querySelector(".faq-box-item-topline-btn");
  const openEl = itemEl.querySelector(".faq-box-item-answer");
  btnEl.classList.toggle("active");
  slideToggle({ element: openEl });
}
