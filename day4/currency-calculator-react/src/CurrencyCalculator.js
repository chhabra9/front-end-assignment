import { useState } from 'react';

export {useState,useEffect} from 'react';
const Calculator=()=>{
    const currencyToRupee= [{name:'rupee',val:1},
    {name:'Yen',val:0.64},
    {name:'Pound',val:100.06},
    {name:'Doller',val:81.59},
    {name:'euro',val:88.10}];
const rupeesToCurrencies=[
        {name:'rupee',val:1},
        {name:'Yen',val:0.011},
        {name:'Pound',val:0.0100},
        {name:'Doller',val:0.012},
        {name:'euro',val:0.011}
      ];
const [fromCurency,setFromCurrency]=useState();
const [toCurency,setToCurrency]=useState();
const [from,setFrom]=useState();
const [to,setTo]=useState();
    const convert1=(event)=>{
        setFrom(event.target.value)
        if(fromCurency===undefined||toCurency===undefined)
                setTo('select currency first')
        else
            setTo(event.target.value*toCurency*fromCurency);
            console.log('hey from convert1');
    }
    const convert2=(event)=>{
        setTo(event.target.value)
        if(fromCurency===undefined||toCurency===undefined)
         setFrom('select currency first');
        else{
            setFrom(event.target.value*toCurency*fromCurency);
        }
    }
return(
    <div>
        <div className='container'>
        <select onChange={e=>setFromCurrency(e.target.value)}>
            <option disabled={true} selected value='0'>select Currency</option>
            {currencyToRupee.map((currency,index)=>{
                return <option key={index} value={currency.val}>{currency.name}</option>
            })}
        </select>
        <input  onChange={convert1}  type='text' value={from} />
        </div>
        <div>
        <select onChange={e=>setToCurrency(e.target.value)}>
            <option disabled={true} selected value='0'>select Currency</option>
            {rupeesToCurrencies.map((currency,index)=>{
                return <option key={index} value={currency.val}>{currency.name}</option>
            })}
        </select>
        <input type='text' onChange={convert2} value={to} />
        </div>
    </div>
)
}
export default Calculator;