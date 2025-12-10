import Inputbox from './components/Inputbox'
// import { Inputbox } from './components'
import { useState } from "react"
import useCurrencyInfo from './hookscustom/useCurrencyInfo'
import './App.css'

function App() {

  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  //yaha humara result ayega isliye uske liye bhi hook ka use krliya 
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

   const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = ()=>{
     setFrom(to)
     setTo(from)
     setConvertedAmount(amount)
     setAmount(convertedAmount)
  }

  const convert = (e)=> {
    e.preventDefault();
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div className="main-container">
         <div className="card">

           <form onSubmit={convert}>

             {/* //From currency box */}
             <Inputbox
               label="From"
               amount={amount}
               currencyOptions={options}
               selectCurrency={from}
               onAmountChange={(amount)=> setAmount(amount)}
               onCurrencyChange={(currency)=> setFrom(currency)}
             />

             {/* //Swap button */}
             <div className="bt-container">
               <button type="button" className="swap-button" onClick={swap}>Swap</button>
             </div>

             {/* //To currency box */}
             <Inputbox
               label="To"
               amount={convertedAmount}
               currencyOptions={options}
               selectCurrency={to}
               onCurrencyChange={(currency)=> setTo(currency)}
               amountDisable
             />

             {/* //convert button */}
             <div className="bt-container">
               <button type="submit" className="convertbutton">
                 Convert {from.toUpperCase()} to {to.toUpperCase()}
               </button>
             </div>

           </form>

         </div>
      </div>
    </>
  )
}

export default App;

