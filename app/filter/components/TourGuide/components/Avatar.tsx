import Image from 'next/image'
import React from 'react'

function Avatar({image}:{image:string}) {
  return (
    <div>
      <Image src={image} alt='avtar'/>
    </div>
  )
}

export default Avatar