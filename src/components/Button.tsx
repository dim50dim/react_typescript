import React from 'react'

const Button = ({
    backgroundColor ,
    fontSize,
    pillShape}: {
        backgroundColor : string,
        fontSize: number,
        pillShape: boolean,
    }) => {

  return (
    <div>
      <button className='bg-red-500 text-white rounded px-4 py-2' >Click me</button>
    </div>
  )
}

export default Button
