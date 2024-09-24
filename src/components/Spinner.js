import React from 'react'
import loading from './loading.png'
export default function spinner() {
  return (
    <div className='text-center '>
      <img style={{ width: '50px' }}src={loading} alt="loading" />
    </div>
  )
}
