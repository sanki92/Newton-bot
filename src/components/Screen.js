import React, { useState } from 'react'
import $ from 'jquery';

function Screen() {  

  $(window).on('load', function () {
    setTimeout(()=>{
      $('#loading').hide();
    }, 3000);
  }) 

  const [inpValue, setInpValue] = useState("")

  const [fly, setfly] = useState("png")
  // SCREEN FUCTIONING
  const messageContainer = document.querySelector(".screen");
  const updatescroll=()=>{
    messageContainer.scrollTo(0,messageContainer.scrollHeight);

}

  // onchange
  const inputBoxChange =(e)=>{
    const inputBox = document.getElementById('messageInp')
    setInpValue(e.target.value)
  }

  
  
  
 
  const sendInfo=(e)=>{
    e.preventDefault()
    const inputBox = document.getElementById('messageInp')
    const  screen = document.getElementById('screen')
    // creating msg element
    if(inpValue===""||null||undefined){}
   else if(inpValue==="instruction" ||inpValue=== "Instruction" ||inpValue=== "instructions" ||inpValue=== "Instructions"){
      const node = document.createElement("div");
      node.classList+="msg right"
      const textnode = document.createTextNode(inputBox.value)
      updatescroll();
      // appending it to screen
      node.appendChild(textnode)
      screen.appendChild(node)
      // clearing the inputbox
      setfly("gif")
      getInfo(inputBox.value)
    }
    else if(inpValue==="Hello" ||inpValue=== "hello" ||inpValue=== "Hola" ||inpValue=== "hola"){
      const node = document.createElement("div");
      node.classList+="msg right"
      const textnode = document.createTextNode(inputBox.value)
      updatescroll();
      // appending it to screen
      node.appendChild(textnode)
      screen.appendChild(node)
      // clearing the inputbox
      setfly("gif")
      getInfo(inputBox.value)
    }
    else{
      const node = document.createElement("div");
      node.classList+="msg right"
      const textnode = document.createTextNode(inputBox.value)
      // appending it to screen
      node.appendChild(textnode)
      screen.appendChild(node)
      updatescroll();

      // clearing the inputbox
      setfly("gif")
      getSolution()
     
    }
    inputBox.value=""
    
    
  }

// FETCHING THROUGH API

const getInfo = (parsedData) =>{
  const inputBox = document.getElementById('messageInp')
  const  screen = document.getElementById('screen')
      
    if(parsedData==="instruction" ||parsedData=== "Instruction" ||parsedData=== "instructions" ||parsedData=== "Instructions"){
      const node = document.createElement("div");
      node.classList+="msg left"
      var textnode = document.createTextNode(`Instructions: *** [1] Syntax: operation/expression Example: simplify/2^2+2 *** || *** [2] Instead of 5³ write 5^3 ***`)
      // appending it to screen
      node.appendChild(textnode)
      screen.appendChild(node)
        updatescroll();
        setTimeout(() => {
          setfly("png")
        }, 800);
     
        setInpValue("")
    }
    else if(parsedData==="Hello" || parsedData==="hello" || parsedData==="Hola" || parsedData==="hola"){
      const node = document.createElement("div");
      node.classList+="msg left"
      var textnode = document.createTextNode(`Hello, I am Newton Bot!! Desinged & Developed by Sankalp Tripathi`)
      // appending it to screen
      node.appendChild(textnode)
      screen.appendChild(node)
        updatescroll();
        setTimeout(() => {
          setfly("png")
        }, 800);
        setInpValue("")
    }
    else{
        // creating msg element
    const node = document.createElement("div");
    node.classList+="msg left"
    const textnode = document.createTextNode(`I ${parsedData.operation}'d your expression '${parsedData.expression}' and the answer is : '${parsedData.result}'`)
    // appending it to screen
    
    node.appendChild(textnode)
    screen.appendChild(node)
      updatescroll();
      setInpValue("")
   

    }
 inputBox.value=""

      // document.getElementById("#plane").setAttribute()
    }
    

  const getSolution= async()=>{ 
    const inputBox = document.getElementById('messageInp')
    inputBox.value=""

  
    const search = '+';  
    const replaceWith = '%2b';
  
    var urlRes = `https://newton.now.sh/api/v2/${inpValue.toLowerCase()}`
    var url = urlRes.split(search).join(replaceWith); //Replacing + into %2b
    setTimeout(() => {
        console.log(fly)
      setfly("png")
      }, 800);
    const data = await fetch(url) 
    const parsedData = await data.json()
    

    updatescroll();
    getInfo(parsedData)
  }
  // const play=(e)=>{
  //   // console.log(e.target.src)
  //   let a = e.target.src
  //  a=a.replace("png","gif")
  //  console.log(a)
  //  return a

  // }
  
  return (
    <>
        <div id="loading">
            <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/45/000000/external-apple-school-and-learning-flatart-icons-flat-flatarticons.png"/>            
            <div id="loader">
            <div id="innerLoader">
              </div>
          </div>
        </div>
        <h1 id='header'>Newton Bot<img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/60/000000/external-apple-university-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/></h1>
        <div className='container screen mt-5' id='screen'>
            <div className='left msg'>Hello, I am Newton Bot!! Desinged & Developed by Sankalp Tripathi</div>
            <div className='left msg'>I can do Mathamatics Calculation like <i> "simplify, factor, derive, integrate, zeroes, area, cos, sin , tan, arccos, arcsin, arctan, abs, log" !</i></div>
            <div className='left msg'>For Instructions, write instruction</div>
            <div  className="left msg">
              Simplify:	simplify/2^2+2(2)	<br/>
              Factor:	factor/x^2 + 2x	<br/>
              Derive:	derive/x^2+2x	<br/>
              Integrate:	integrate/x^2+2x	<br/>
              Find 0's:	zeroes/x^2+2x	[-2, 0]<br/>
              Area Under Curve:	area/2:4|x^3	<br/>
              Cosine:	cos/pi	<br/>
              Sine:	sin/0<br/>
              Tangent:	tan/0	<br/>
              Inverse Cosine:	arccos/1	<br/>
              Inverse Sine:	arcsin/0	<br/>
              Inverse Tangent:	arctan/0	<br/>
              Absolute Value:	abs/-1	<br/>
              Logarithm:	log/2|8	
              </div>  
        </div> 
        <div className='container send'>
        <form action="#" autoComplete="off" id="send-container">
            <input type="text" placeholder="Message..." value={inpValue} onChange={inputBoxChange} name="messageInp" id="messageInp"/>
            <button className="btn btn-sm" onClick={sendInfo} type="submit"><img id='plane' className='mt-3' src={`https://img.icons8.com/color/500/000000/airplane-take-off--v2.${fly}`}/></button>
        </form>  
        </div>
    </>
  )
}

export default Screen