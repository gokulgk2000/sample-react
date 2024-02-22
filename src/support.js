import React, { useEffect, useState } from 'react'
import { BuilderComponent, builder } from '@builder.io/react'
builder.init('61ed16fdafa54924b5decd7a334091d2')

const SupportPage = () => {
    const [builderContentJson, setBuilderContentJson] = useState([])
    useEffect(() => { 
        builder.get('faq-1')
          .promise().then(setBuilderContentJson)
      }, [])
      console.log("builderContentJson",builderContentJson)
  return (
   <div className='mt-5'><p>support</p> <BuilderComponent model="faq-1" content={builderContentJson} /></div>
  )
}

export default SupportPage