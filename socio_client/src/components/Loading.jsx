import React from 'react'

const Loading = ({height='100vh'}) => {
  return (
    <div style={{height}} className='h-screen flex items-center justify-center'>
      <div className='w-10 h-10 border-4 border-t-transparent rounded-full animate-spin border-gray-300'></div>
    </div>
  )
}

export default Loading
