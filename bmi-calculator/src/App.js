//import logo from './logo.svg';
import "./App.css";
import React,{useState} from "react"; 

function App() {


  const [weight,setWeight]   = useState('0');
  const [height,setHeight]   = useState('0');
  const [bmi,setBMI]         = useState(''); 
  const [message,setMessage] = useState('');

  let calcbmi = (e) => {
     
    e.preventDefault(); 

     if( weight === '0' || height === '0' ){
      alert("Please enter the height and weight");
     }

     else{
       
       let bmi = (weight/(height * height) * 703)

       setBMI(bmi.toFixed(1))

       if(bmi < 25){
        setMessage('Your underweight')

       }
       else if(bmi>=25 && bmi < 30){
        setMessage('Your healthy weight'); 
       }

       else{
        setMessage('Your Overweight')
       }

     }

  }

  // let reload = () => {
  //   window.location.reload();
  // }

  return (
    <div>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label className="">Enter Your weight in KG</label>
             <div>
               <input type="text" placeholder="Enter the Weight" value={weight} onChange={(event) => setWeight(event.target.value)} />
            </div>
          </div>

          <div className="">
            <label>Enter Your height in CM</label>
              <div>
                <input type="text" placeholder="Enter the Height" value={height} onChange={(event) => setHeight(event.target.value)} />
              </div>
          </div>

          <div className="submit">
            <button className="btn" type="submit">Submit</button>
          </div>

          <div className="center">
            <h3>Your BMI value is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
