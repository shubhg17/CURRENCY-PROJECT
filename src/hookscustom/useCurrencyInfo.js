// yeh bhi ek custom hook ha  yeh custom hooks bhi apke built in hooks ko use krskte ha jese useState useEffect useRef 
// function hello() {
//    return []
// }

// generally hum hooks ko use krte hue use ka istamal krte ha nhi bhi kroge function me toh chal jayega as function hi ha 

//yeh custom hook apka data return krega data ke liye hum API call krega jaha se hume data milega jabh iss hook ko call krenge mtlb jabh yeh load hoga tabh hum API ko call krvayenge 
function useCurrencyInfo(currency) {
   //idhar hum useEffect hook ka istaml krenge iss method se mero automatically fetch call hojayega
   useEffect(()=> {
     
     //variable ka naam data as data hume hold krvana ha aur isme hum useState me bydefault hum {} ek empty object de denge as in case API call nhi hui thi empty object ayega jiss se crash nhi hoga 
      const [data , setData] = useState({})

       // iss se fetch krvayenge but karvayenge kaha uske liye hume url use krna padega aur mostly joh API call se data arha ha voh string format me hota ha usse change krna padta ha
       //fetch me chaining hoti ha so then lagaskte ha  
       fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) 
       // isme callback jata ha .then() me
       // iss se mera data json format me convert hogya ha and abh mein issko hume hold krna padega varibale me hold nhi krskte kyuki voh UI me kabhi update nhi hoga so hum useState hook ka istamal krenge 
       .then((res)=>res.json())
       // joh hum api call me currency me pass krenge {currency} vohi humari key value ayegi eg inr then inr usd then usd        aur har baari ek object ko access krne ke liye hume . use krna jurat nhi hum square bracket bhi use krskte ha []
       .then((res) => setData(res[currency])) //iss se mene joh bhi value di ha url me uss se me uski value le lunga 
       console.log(data)
       //abh final useEffect me joh tumhara fetchAPI ha usse kabh call krvaoge jabh currency me change hoga 

       console.log(data)
       return data
   } , [currency]) 
}

//isme mene kra kya ki mene ek functionality design kri aur iss pure method ko hi return krdiya useCurrencyInfo wale method ko  jese useState me bhi vohi ho rha ha ki pura ka pura method hi return ho jata h
export default useCurrencyInfo