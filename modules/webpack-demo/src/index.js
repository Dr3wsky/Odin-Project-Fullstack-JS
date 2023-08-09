import _ from 'lodash';
import myName from './myName';
import './style.css';

function component() {
  const element = document.createElement('div');
  const element2 = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element2.textContent = myName('Cody');
  element.classList.add('hello');
  
  return element;
}

document.body.appendChild(component());