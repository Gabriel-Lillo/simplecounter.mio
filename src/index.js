import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;





setInterval(() => {
  

  num1++;

  ReactDOM.render(
    <React.StrictMode>
      <App
        num6={num6}
        num5={num5}
        num4={num4}
        num3={num3}
        num2={num2}
        num1={num1}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


