const { slideToggle, slideUp, slideDown } = window.domSlider;
const box = document.querySelector(".faq-box");

box.addEventListener("click", clickBtnFaq);

function clickBtnFaq(e) {
  const btnEl = e.target.closest(".faq-box-item-topline-btn");
  if (!btnEl) {
    return;
  }
  const liParentEl = e.target.closest(".faq-box-item");
  const openEl = liParentEl.querySelector(".faq-box-item-answer");
  btnEl.classList.toggle("active");
  slideToggle({ element: openEl });
}
