import React, { useState } from 'react'
import './Chat.css' // Import the CSS file

const Chat = () => {
  const [msg,setMsg] = useState("")

  const handleLogs = ()=>{

  }
  const handleRTL = ()=>{

  }
  const handleStop = ()=>{

  }
  const sendData=()=>{
    //send the txt to backend and get back the response

  }

  return (
    <>
      <div className='grid grid-cols-12 m-6 main-container'>
        <div className='col-span-2 h-screen mr-6'>
          <div className='flex flex-col gap-y-7'>
            <Button placeholder="Logs" color="#7129e8" onclick={handleLogs}></Button>
            <Button placeholder="RTL" color="#0aac4b" onclick={handleRTL}></Button>
            <Button placeholder="STOP" color="red" onclick={handleStop}></Button>
            <div
            style={{backgroundColor:'#1F1F1F',width: '218px',height: '298px',top: '406px',left: '34px',gap: '0px',border: '1px 0px 0px 0px',opacity: '0px',}}>

            </div>
          </div>
        </div>
        <div className='col-span-10'>
          <div className='flex flex-col mr-14'>
            <div 
              style={{backgroundColor:'#1F1F1F',width: 'auto',height: '550px',top: '36px',left: '295px',gap: '0px',border: '1px 0px 0px 0px',opacity: '0px',}}>
                
            </div>
            <div className='mt-4 flex justify-between'>
                <button
                className='bg-[#7129e8] text-2xl font-bold font-sans p-2'>
                  FWD
                </button>
                <div
                style={{backgroundColor:'#1F1F1F',width: '1020px',height: '80px',top: '547px',left: '435px',gap: '0px',border: '1px 0px 0px 0px',opacity: '0px',}}>
                <input
                  onChange={e=>setMsg(e.target.value)} 
                  type="text" 
                  className='w-full h-full bg-transparent outline-none text-white text-2xl px-2 caret-white'
                  style={{ caretColor: 'white' }}
                />
                </div>
                <button onClick={sendData}
                className='bg-[#7129e8] text-2xl font-bold font-sans p-2' style={{width:'100px'}}>
                  Talk
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Button = ({placeholder,onclick,color})=>{
  return(
    <>
        <button onClick={onclick} 
          className='p-2 text-2xl font-bold font-sans'
          style={{
            backgroundColor: color,
            width: '218px',
            height: '88px',
            top: '37px',
            left: '34px',
            gap: '0px',
            border: '1px 0px 0px 0px',
            opacity: '0px'
          }}
        >
          {placeholder}
        </button>
    </>
  )
}

export default Chat