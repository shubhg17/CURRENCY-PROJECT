import React, { useId } from "react";

//useId hook : useId is a react hook for generating unique ID's that can be passed to accessibility attributes yeh attributes kya hote ha har html ke andar accessibility attributes hote ha jis se user tab tab krke kuch access krna chaiye toh vaha se leskta ha lekin uski mapping kayi baari difficult ho jati h ki kis user ke sath 
//do not call useId to generate keys in a list Keys should be generated from your data

//yeh function inputbox wala apse abhi do input le rha ha ek label aur classname classname nhi ha toh abhi default de diya amount bhi lenge and aur bhi cheeze 

// Reacts always sends one object that object contains all the props  your component joh tumne banaya idhar inputbox must accept that one object props then u can either do with 2 ways
//react will never send multiple parameters so u can never receive them like normal JS functions normal functions ki tarah nhi krskte isko 
// // function Inputbox(props) {
//     const label = props.label
//     const amount = props.amount
// //   }

//2nd way function Inputbox({label , amount}) modern way  this is also JS destructing 

//yeh overall JS ki destructing likhi ha humne niche 
function Inputbox({
   label , // from to keyword aske input box me uske liye label diya 
   amount, 
   onAmountChange, // joh bhi iss component ko call krega as amount change hoga toh state bhi change krni padegi iske liye hum useState use krenge 
   onCurrencyChange, // same as amountchange concept 
   currencyOptions = [] , // as jisme sari currency ayengi ki array hi paas kro incase nhi ha toh default array pass kro 
   selectCurrency = "usd", // yeh by default humne de diye ki koi currency toh selected rhe isliye baad me change krskte ha 
   amountDisable=false, // yeh necessary nhi ha but still ki user amount dalega ya nhi 
   currencyDisable=false,
   className = "",
}) {

  //ek unique value dega yeh yeh use kro ya nah kro tumhare upar ha to learn a new hook we used this
   const amountInputId = useId()

    return (
      <div className={`outerdiv ${className}`}>
        <div className="innerdiv">

       {/* // yaha pe hum uss value ko bind krdenge joh ayegi useId hook se aur jese label me for hota ha idhar hum htmlFor use krte ha as for ek reserved keyword ha isliye for use nhi krenge
       // label bhi unique ke liye use hota ha  */}
           <label htmlFor={amountInputId} className="labelClass">
                {label}
           </label>
           <input
             id={amountInputId} //input me bhi humne use bind kradiya joh unique value ayegi 
             className="firstbar"
             type="number"
             placeholder="Amount"
 // These are HTML input attributes:
// ✔ value → what is written inside the box
// ✔ disabled → whether input can be typed or not
// ✔ onChange → event when typing happens
             disabled={amountDisable} 
             value={amount}
             //yaha tk theek ha but jabh mera amount change hoga toh me yaha ek onChange event use krunga as har input box pe onChange lagaskte ha
             onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
           />
        </div>
        <div className="inner2div">
          <p className="para">Currency Type</p>

          <select 
          className="selectclass" 
          value={selectCurrency}
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
