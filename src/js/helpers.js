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

    function converter(){
      if(document.getElementById('temp').innerHTML.includes('Celsius')){
        
      }
      const tempFahrenheit = parseFloat((tempCelsius * (9 / 5) + 32).toFixed(2));
      const tempCelsius = parseFloat(((tempFahrenheit - 32) * 5/9).toFixed(2));
    }
  
    return {
      addInnerText, createElement, converter, createElementWithInnerText, 
    };
  };
  
  
  export { helpers };