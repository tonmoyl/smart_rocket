import UTIL from "lodash";

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = UTIL.join(['Hello', 'webpack'], ' ');


  return element;
}

document.body.appendChild(component());
