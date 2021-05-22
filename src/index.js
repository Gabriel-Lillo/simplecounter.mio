import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SimpleCounter from './SimpleCounter';

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

setInterval(() => {
  
  num1++;
  num2++;
  num3++;
  num4++;
  num5++;
  num6++;

  ReactDOM.render(
    <SimpleCounter
      num6={Math.floor(num6 / 100000)}
      num5={Math.floor(num5 / 10000)}
      num4={Math.floor(num4 / 1000)}
      num3={Math.floor(num3 / 100)}
      num2={Math.floor(num2 / 10)}
      num1={Math.floor(num1 / 1)}
    />,
    document.getElementById('root')
  );
}, 1000);


