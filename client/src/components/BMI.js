import React,{useState} from 'react'
const BMI = () => {
const[weight,setWeight]=useState('');
const[height,setHeight]=useState('');
const[result,setResult]=useState('');
const[status,setStatus]=useState('');
const[display,setDisplay]=useState('none')
const [color,setColor]=useState('')
    const calculate=()=>{
        const [feet,inches]=height.split('.')
        const heightInInches=Number(feet)*12+Number(inches);
        const heightinMeters=heightInInches*0.0254;
       const bmi= weight/(heightinMeters*heightinMeters)
       if(bmi<18.5){
        setStatus('your BMI is below average')
        setColor('orange')
       }
       else if(bmi<=25){
        setStatus('your BMI is normal')
        setColor('green')
       }
       else{
        setStatus('your BMI is above average')
        setColor('red')
       }
       setResult('Your Body Mass Index (BMI) is: '+ bmi.toFixed(2))
       setDisplay('block')
    }

  return (
  
    <div>
        <div className='bmiHeader'>BMI Calculator</div>
        <div className='form-container'>
            <input className='wgt' type='number' placeholder='Weight in KG' onChange={(e)=>setWeight(e.target.value)}/>
            <input className='hgt' type='number' placeholder='Height in Feet' onChange={(e)=>setHeight(e.target.value)}/>
            <button className='calculatebtn' onClick={calculate}>Calculate</button>
        </div>
        <div className='resultcalc' style={{display,backgroundColor:color} }>{result}<br/>{status}</div>
    </div>
  )
}

export default BMI