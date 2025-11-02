import React from 'react'

const Loading = ({height='100vh'}) => {
  return (
    <div style={{height}} className='h-screen flex items-center justify-center'>
      <div className='w-10 h-10 border-4 border-solid border-accent border-t-transparent rounded-full animate-spin'></div>
    </div>
  )
}

export default Loading
