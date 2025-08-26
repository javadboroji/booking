import React from 'react'

function LogoLoading() {
    const logoName="javad";
    const letters =logoName.split("");

    console.log(letters ,'*');
    
  return (
    <div className=' flex items-center justify-center '>
        {letters.map(char=>{
            return <span 
            data-char={char}
            key={char} 
            className='relative font-bold text-6xl text-gray-300  logo-char'> {char}</span>
        })}
    </div>
  )
}

export default LogoLoading