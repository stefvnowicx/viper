const createOdometer = (el, value) => {
    const odometer = new Odometer({
      el: el,
      value: 0,
    });
  
    let hasRun = false;
  
    const options = {
      threshold: [0, 0.9],
    };
  
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!hasRun) {
            odometer.update(value);
            hasRun = true;
          }
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  };
  
  const yearsOdometer = document.querySelector(".results__number-years");
  createOdometer(yearsOdometer, 25);
  
  const prizesOdometer = document.querySelector(".results__number-prizes");
  createOdometer(prizesOdometer, 150);
  
  const clientsOdometer = document.querySelector(".results__number-clients");
  createOdometer(clientsOdometer, 220);