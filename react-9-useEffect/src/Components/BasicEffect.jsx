import React, { useEffect } from 'react'

const BasicEffect = () => {
  useEffect(() => {
    console.log('BasicEffect component mounted')
  },[])
  return (
    <div>
      
    </div>
  )
}

export default BasicEffect
