window.addEventListener("load", windowLoad);

function windowLoad() {
  function digitsCountersInit(digitsCountersItems) {
    let digitsCounters = digitsCountersItems
      ? digitsCountersItems
      : document.querySelectorAll("[data-digits-couter]");
    if (digitsCounters) {
      digitsCounters.forEach((digitsCounter) => {
        digitsCountersAnimate(digitsCounter);
      });
    }
  }

  function digitsCountersAnimate(digitsCounter) {
    let startTimestamp = null;
    const duration = parseInt(digitsCounter.dataset.digitsCounter)
      ? parseInt(digitsCounter.dataset.digitsCounter)
      : 1000;
    const startValue = parseInt(digitsCounter.dataset.max);
    const startPosition = 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      digitsCounter.innerHTML = Math.floor(
        progress * (startPosition + startValue)
      );
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  let options = {
    threshold: 0.75,
  };
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const digitsCountersItems = targetElement.querySelectorAll(
          "[data-digits-couter]"
        );
        if (digitsCountersItems.length) {
          digitsCountersInit(digitsCountersItems);
        }
      }
    });

  }, options);

  let sections = document.querySelectorAll(".amount-item-numbers");
  if (sections.length) {
    sections.forEach((section) => {
      observer.observe(section);
    });
  }
}
