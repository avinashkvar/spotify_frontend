import React from 'react'

const Home = () => {
  
  const handleclick = ()=>{
     fetch('https://spotify-avinashkvar.vercel.app/login')
     .then((res)=>res.json()).then((res)=>console.log(res))
     .catch((err)=>console.log(err))
  }
  return (
    <div>Home
        <button onClick={()=>handleclick()}>login</button>
    </div>
    
  )
}

export default Home