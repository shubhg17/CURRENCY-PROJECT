import React from  "react"

//yeh function inputbox wala apse abhi do input le rha ha ek label aur classname classname nhi ha toh abhi default de diya amount bhi lenge and aur bhi cheeze 
function Inputbox({
   label ,
   amount,
   onAmountChange, // joh bhi iss component ko call krega as amount change hoga toh state bhi change krni padegi iske liye hum useState use krenge 
   onCurrencyChange, // same as amountchange concept 
   currencyOptions = [] , // as jisme sari currency ayengi ki array hi paas kro incase nhi ha toh default array pass kro 
   selectCurrency = "usd", // yeh by default humne de diye ki koi currency toh selected rhe isliye baad me change krskte ha 
   amountDisable=false, // yeh necessary nhi ha but still ki user amount dalega ya nhi 
   currencyDisable=false,
   className = "",
}) {
    return (
      <div className="outerdiv">
        <div className="innerdiv">
           <label className="labelClass">
                {label}
           </label>
           <input
             className="firstbar"
             type="number"
             placeholder="Amount"
             disabled={amountDisable}
             value={amount}
             //yaha tk theek ha but jabh mera amount change hoga toh me yaha ek onChange event use krunga as har input box pe onChange lagaskte ha 
             // iss se tumne ek event fire kiya aur iss se ek method call krskte ha but konsa method call kru voh humne de rkha ha onAmountChange input field me upar function me but yeh crash krskta ha as tumne input field me koi default value pass nhi kr rkhi isliye ek check krenge hum kar bhi nhi skte as function ha here && tbh hoga ki agar yeh available ha onAmountChange wala method toh isko usse krenge  
             //Javascript onChange me value string format me le liti ha toh use number me convert krdenge 
             onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
           />
        </div>
        <div className="inner2div">
          <p className="para">Currency Type</p>
          <select 
          className="selectclass" 
          value={selectCurrency}
          // idhar humne number me convert nhi kiya as usd yeh sab string me ayega baki same as amount wala method
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
           disabled={currencyDisable}
           >
              

              {/* //loop lagane ke liye hum yaha map ka use kr rhe ha  */}
              {currencyOptions.map((currency)=>(
                //jabh bhi loop lagayenge ap jsx me ek key paas krni padegi ki agar apko performance lani ha loop me elements ko repeat krne ke liye toh apko key pass krni hi chaiye as performance increase kr ske chl jayega but performance bhot degrade hojati ha 
                //agar loops use krne ha toh key ka dhyan rkhe in react as performance hit hoti ha better option yehi hota ha ki index ki jagah koi unique field le lo ids agar le rhe ho koi toh voh jyada sahi ha as compared to index  
                 <option key={currency} value={currency}>
                   {currency}
                    {/* // as user ko har bari joh currency ha voh display ho  */}
                 </option> 
              ))}
          </select>
        </div>
      </div>
    )
}

//iss se bhi export hojayega but ek better way ha export krne ka generally hum voh bade projects ke liye use krte ha 
export default Inputbox