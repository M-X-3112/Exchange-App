import React, { useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import "../src/index.css"
import axios from 'axios'
function App() {
    const [amount,setAmount] = useState(0)
    const [fromCurrency,setFromCurrency] = useState('USD')
    const [toCurrency,setToCurrency] = useState('EUR')
    const [result,setResult] = useState(0)
  
    let token = "fca_live_FXhn90pUyFbfVTdrOWM2D7FM3b9wcfnXrzIYN0tO";
    let baseUrl = "https://api.freecurrencyapi.com/v1/latest";    
    const exchange = async () => {
      if(amount<=0) {
        alert("Please enter a positive amount.");
        return;
      }
      try {
        const response = await axios.get(
          `${baseUrl}?apikey=${token}&base_currency=${fromCurrency}`
        );
        const result2 = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result2);
      }
      catch(error) {
        console.log("Error",error);
        alert("Please try again.")
      }
      
    }

  return (
    <div className='main'>
      <div className='exc-box'>
        <div className='bar'><h1>Exchange Bar</h1></div>
        <div className="function">
          <input 
            value={amount}
            onChange={(e) => setAmount(e.target.value)} 
            type="number" 
            placeholder='...' 
            />
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} >
            <option>USD</option>
            <option>TRY</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>RUB</option>
          </select>
          <span><FaLongArrowAltRight className='icon' /></span>
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} >
            <option>USD</option>
            <option>TRY</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>RUB</option>
          </select>
          <input
            value={result}
            onChange={(e) => setResult(e.target.value)} 
            type="number" 
            placeholder='...' 
            readOnly
          />
        </div>
        <button onClick={exchange}>Exchange!</button>
      </div>
    </div>
  )
}

export default App