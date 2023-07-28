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

 async function digitsCountersAnimate(digitsCounter) {
    let startTimestamp = null;
    await refreshDataCounters();
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
  let observer = new IntersectionObserver((entries, observer) => {
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

//https://docs.google.com/spreadsheets/d/1g7L0wGZOsrsTBnFKl4MQsw9O9fVYJ2XxAy0K9gFGSoU/edit?usp=sharing
//https://docs.google.com/spreadsheets/d/1CEQsUVfJFMx7zCAHLm2KPGLSjaNSNxfMk7107ZH2ae8/edit#gid=0

async function getNubers(){
  const gDocBaseURL = 'https://docs.google.com/spreadsheets/d/';
  const gDID = '1CEQsUVfJFMx7zCAHLm2KPGLSjaNSNxfMk7107ZH2ae8';
  const sheetName = 'Sheet1';
  const range = 'B5:C5';

  const accessLink = gDocBaseURL + gDID + '/gviz/tq?sheet=' + sheetName + '&range=' + range;

  try {
    const response = await fetch(accessLink);
    const res2text = await response.text();
    return JSON.parse(res2text.substring(47).slice(0,-2));
    
  } catch (error) {
    console.error(error);
  }

}

async function refreshDataCounters(){

  const data = await getNubers();

  const filds = document.querySelectorAll('[data-digits-couter]');

  for(let i = 0; i < filds.length; i++){
    filds[i].dataset.max = data.table.rows[0].c[i].v;
  }
}