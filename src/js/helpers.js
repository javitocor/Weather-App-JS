const helpers = function helpers() {
    const createElement = function createElement(tag, className) {
        const element = document.createElement(tag);
        element.className = className;
        return element;
      };
    
    const addInnerText = function addInnerText(className, text) {
        const element = document.getElementById(className);
        return element.innerHTML = text;        
    };
  
    return {
      addInnerText, createElement,
    };
  };
  
  
  export { helpers };