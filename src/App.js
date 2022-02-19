import './App.css';
import React, { useState } from 'react';


function App() {


  let standlibrary = {
    32:0, 1488: 1, 1489: 2, 1490: 3, 1491: 4, 1492: 5, 1493: 6, 1494: 7, 1495: 8, 1496: 9, 1497: 10, 1498: 20, 1499: 20,
    1500: 30, 1501: 40, 1502: 40, 1503: 50, 1504: 50, 1505: 60, 1506: 70, 1507: 80, 1508: 80, 1509: 90, 1510: 90, 1511: 100, 1512: 200, 1513: 300,
    1514: 400
  }

  let biglibrary = {
    32:0, 1488: 1, 1489: 2, 1490: 3, 1491: 4, 1492: 5, 1493: 6, 1494: 7, 1495: 8, 1496: 9, 1497: 10, 1498: 500, 1499: 20,
    1500: 30, 1501: 600, 1502: 40, 1503: 700, 1504: 50, 1505: 60, 1506: 70, 1507: 800, 1508: 80, 1509: 900, 1510: 90, 1511: 100, 1512: 200, 1513: 300,
    1514: 400

  }
  const [myInput, setInput] = useState('');
  const [myMethod, setMethod] = useState('');
  let myOutput = 0;


  if (myMethod === 'standard') {
    for (let char in myInput) {
    myOutput += standlibrary[myInput.charCodeAt(char)]
  }}else if(myMethod === 'big'){
    for (let char in myInput) {
    myOutput += biglibrary[myInput.charCodeAt(char)]
  }}else{
    myOutput = ''
  }

 

  const changeText = (e) => {
    setInput(e.target.value);
  }

  const changeType = (e) => {
    setMethod(e.target.value);
  }


  
  return (
    <div className="App">
      <header>Gematria Generator</header>
      <p className="Container">
      <form>
      <label for="user-input">Please enter Hebrew here:  </label>
      <input onChange={changeText} type="text" id="hebrew"/><br>
      </br>
      <br>
      </br>
      <div>
        <input onChange={changeType} type="radio" value="standard" name="gender" /> Standard
        <input onChange={changeType} type="radio" value="big" name="gender" /> Mispar Gadol
      </div>
      <br>
      </br>
        </form>

        <div className="text-out">Output: {myOutput}</div>
        
          </p>
    </div>
  );
}

export default App;