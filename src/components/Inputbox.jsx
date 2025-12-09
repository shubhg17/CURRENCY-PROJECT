import React from  "react"

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
    return (
      <div className={`outerdiv ${className}`}>
        <div className="innerdiv">
           <label className="labelClass">
                {label}
           </label>
           <input
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
            
            //Fires when the value of an input changes AND the element loses focus mtlb jabh hum jaha likh rhe ha mtlb input box ke bhar jab tk  click nhi krenge voh mtlb ha elment loses focus tbh tk onchange fire nhi hoga  (onchange)
            //Fires immediately when you click an element.

             // iss se tumne ek event fire kiya aur iss se ek method call krskte ha but konsa method call kru voh humne de rkha ha onAmountChange input field me upar function me but yeh crash krskta ha as tumne input field me koi default value pass nhi kr rkhi isliye ek check krenge hum kar bhi nhi skte as function ha here && tbh hoga ki agar yeh available ha onAmountChange wala method toh isko usse krenge  
             //Javascript onChange me value string format me le liti ha toh use number me convert krdenge 
             onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
           />
        </div>
        <div className="inner2div">
          <p className="para">Currency Type</p>

{/* 
        // select HTML ka element ha basically yeh ek dropdown hota ha 
         //<select>
             <option value="usd">USD</option>
             <option value="inr">INR</option>
         </select>
         //user ek value choose krega in options me 

         // Option dropdown ke andar ek ek choice hoti ha example:  <option value="usd">usd</option> iska matlab user ko "usd" dikhega  if user selects value then usd milega

         // .map() is used agar 2-3 currencys ho toh manually likh skte ho <option>usd</option>
<option>inr</option>
<option>eur</option> but jab APi se 10 -20 currencies ajyengi toh manually nhi likhskte  isliye loop lagate hain using .map()    and  
 : Map krta kya ha  : array ke har element ko leta ha uske liye ek <option> banata h and returns it .map() = list ko loop karke har element ke liye option bana deta hai
*/}

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