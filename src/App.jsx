import Inputbox from './components/Inputbox'
import './App.css'

function App() {

  return (
    <>
      <div className="main-container">
         <div className="card">
          {/* //From currency box */}
           <Inputbox label="From"/>
           {/* //Swap button */}
           <button className="swap-button">Swap</button>
           {/* //To currency box */}
           <Inputbox label="To"/>
           {/* //convert button */}
           <button className="convertbutton">Convert</button>
         </div>
      </div>
    </>
  )
}

export default App

//Hook in the end ek function hi ha toh tum custom hooks banaskte ho aur yeh file name hum JSX nhi rkhenge kyuki yeh hooks majority of the cases me js return krte ha aur jabh js return ho rha ho toh js rkho jsx return ho toh jsx rakho file name yeh ek achi practice hoti ha 
