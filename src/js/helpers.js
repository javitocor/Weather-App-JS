/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-assign */
const helpers = function helpers() {
  const createElement = function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  };

  const createElementWithInnerText = function createElementWithInnerText(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = text;
    return element;
  };


  const addInnerText = function addInnerText(className, text) {
    const element = document.getElementById(className);
    return element.innerHTML = text;
  };

  function getTemp(data) {
    const report = {};
    report.tempC = (parseFloat(data.main.temp) - 273.15).toFixed(1);
    report.tempF = ((parseFloat(data.main.temp) - 273.15) * (9 / 5) + 32).toFixed(1);

    report.tempFeelC = (parseFloat(data.main.feels_like) - 273.15).toFixed(1);
    report.tempFeelF = ((parseFloat(data.main.feels_like) - 273.15) * (9 / 5) + 32).toFixed(1);

    report.tempMinC = (parseFloat(data.main.temp_min) - 273.15).toFixed(1);
    report.tempMinF = ((parseFloat(data.main.temp_min) - 273.15) * (9 / 5) + 32).toFixed(1);

    report.tempMaxC = (parseFloat(data.main.temp_max) - 273.15).toFixed(1);
    report.tempMaxF = ((parseFloat(data.main.temp_max) - 273.15) * (9 / 5) + 32).toFixed(1);

    return report;
  }

  return {
    addInnerText, createElement, createElementWithInnerText, getTemp,
  };
};


export { helpers };