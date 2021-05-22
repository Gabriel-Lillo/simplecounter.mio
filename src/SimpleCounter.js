import './App.css';

function SimpleCounter(props) {
  return (
    <div className="container mt-5" id="counter">
      <div className="row">
        <div className="col display-4">
          <i className='fa fa-clock'></i>
        </div>
        <div className="col display-4">
          {props.num6 % 10}
        </div>
        <div className="col display-4">
          {props.num5 % 10}
        </div>
        <div className="col display-4">
          {props.num4 % 10}
        </div>
        <div className="col display-4">
          {props.num3 % 10}
        </div>
        <div className="col display-4">
          {props.num2 % 10}
        </div>
        <div className="col display-4">
          {props.num1 % 10}
        </div>
      </div>
    </div>
  )
}

export default SimpleCounter;
